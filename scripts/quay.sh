set -e

#app="${1}"
#version="${2}"
RELEASE_TYPE=$1

echo "Logging into Quay..."
echo "${QUAY_PASSWORD}" | docker login -u "${QUAY_USERNAME}" --password-stdin quay.io

if [[ $RELEASE_TYPE == "release" ]]; then
    export TAGGED_IMAGE="urbanos/discovery_ui:${GITHUB_BRANCH}"
elif [[ $RELEASE_TYPE == "master" ]]; then
    export TAGGED_IMAGE="urbanos/discovery_ui:development"
else
    echo "Branch should not be pushed to Dockerhub"
    exit 0
fi

docker tag discovery_ui:build "quay.io/${TAGGED_IMAGE}"
docker push "quay.io/${TAGGED_IMAGE}"

#docker tag smartcitiesdata/$app:$version quay.io/urbanos/$app:$version
#docker push quay.io/urbanos/$app:$version
