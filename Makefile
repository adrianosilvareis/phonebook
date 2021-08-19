include .env

release: 
	GITHUB_TOKEN=${GITHUB_TOKEN} yarn release

build: 
	yarn build

install: | node_install husky_install husky_hook

clear:
	rm -rf node_modules package-lock.json yarn.lock .husky

node_install: clear
	yarn install

husky_install: node_install
	yarn husky install

husky_hook: | commit-msg pre-commit

commit-msg: husky_install
	npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$$1"'

pre-commit: husky_install
	npx husky add .husky/pre-commit 'npx lint-staged'