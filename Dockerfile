FROM node:20.9.0-alpine AS builder
WORKDIR /app/src

# Copy only the needed files to help docker caching
COPY .babelrc package-lock.json package.json webpack.config.js nginx-csps.conf ./
COPY src ./src
COPY test-helpers ./test-helpers
COPY config ./config

RUN npm ci
RUN npm test
RUN npm run build

RUN chgrp -R 0 /app/src && \
    chmod -R g+rwX /app/src

FROM nginx:alpine
COPY docker_assets/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/src/dist /usr/share/nginx/html
COPY --from=builder /app/src/nginx-csps.conf /etc/nginx/conf.d/nginx-csps.conf
RUN apk update && apk upgrade
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
