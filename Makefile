.PHONY: build test lint publish

build:
	npm run build

test:
	npm test

lint:
	npm run lint

publish: build
	npm publish --access public --registry https://registry.npmjs.org
