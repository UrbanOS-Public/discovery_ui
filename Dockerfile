FROM node:14.17.4-alpine AS builder
WORKDIR /app/src

# Copy only the needed files to help docker caching
COPY .babelrc package-lock.json package.json webpack.config.js ./
COPY src ./src
COPY test-helpers ./test-helpers
COPY config ./config

RUN npm ci
RUN npm test
RUN npm run build

RUN chgrp -R 0 /app/src && \
    chmod -R g+rwX /app/src

FROM registry.access.redhat.com/ubi8/nginx-120:1-60
ENV HOME=/opt/app-root/src

COPY --from=builder /app/src/dist ${HOME}
COPY run.sh ${HOME}

ENV PORT 8080
EXPOSE ${PORT}
WORKDIR ${HOME}
USER root
RUN yum remove python3-urllib3-1.24.2-5.el8.noarch -y
USER default
CMD ./run.sh
