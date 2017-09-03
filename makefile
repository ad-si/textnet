all:

deploy: stdlib-deploy

# Deploy for testing
stdlib-deploy-dev:
	lib up dev

# Deploy a release
# Attention: Package file version must be updated before
stdlib-deploy:
	lib release

# deploy:
# 	s3cmd sync --acl-public readme.md s3://textnet.io
# 	s3cmd modify \
# 		--add-header='Content-Type: text/markdown; charset=utf-8' \
# 		--add-header='X-Content-Type-Options: nosniff' \
# 		s3://textnet.io/readme.md


aws-deploy: index.main sun.main

%.main: %.js
	serverless deploy function --function $*

.PHONY: all deploy
.PHONY: stdlib-deploy-dev stdlib-deploy
.PHONY: aws-deploy %.main
