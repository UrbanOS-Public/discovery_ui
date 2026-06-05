.PHONY: build test lint publish

build:
	npm run build

run:
	npm run start

test:
	npm test

lint:
	npm run lint

publish: build
	npm publish --access public --registry https://registry.npmjs.org

release:
	npm install
	#batcat docs/RELEASE_QUESTIONS.md
	./scripts/release_instructions.sh
