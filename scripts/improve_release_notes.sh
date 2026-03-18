#!/bin/bash

template=$1

VERSION=2.1.64
if [ -f .release ] ; then
    VERSION="$(cat .release)"
fi;

REACT_VERSION=$(grep react-discovery-ui package.json | scripts/getversion.sh)

echo $REACT_VERSION


sed -e "s/{{VERSION}}/$VERSION/g" \
    -e "s/{{REACT_VERSION}}/$REACT_VERSION/g" \
        $template
