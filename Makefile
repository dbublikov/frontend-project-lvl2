install: # install npm
	npm ci
	
lint:#initializing linter
	npx eslint .

lintfix:#fixing linter
	npx eslint . --fix

test:#initilizing tests on GitHub Actions
	npm test

test-coverage:#initilizing test-coverage
	npm test -- --coverage --coverageProvider=v8