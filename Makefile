install: # install npm
	npm ci
	
lint:#initializing linter
	npx eslint .

lintfix:#fixing linter
	npx eslint . --fix
