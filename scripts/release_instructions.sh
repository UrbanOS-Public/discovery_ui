#!/bin/bash

cat package.json  | grep '"version":' | scripts/getversion.sh | tee .release
#release=$(cat .release)

scripts/improve_release_notes.sh docs/RELEASE_QUESTIONS.md

#echo $release
