all:

# deploy:
# 	s3cmd sync --acl-public readme.md s3://textnet.io
# 	s3cmd modify \
# 		--add-header='Content-Type: text/markdown; charset=utf-8' \
# 		--add-header='X-Content-Type-Options: nosniff' \
# 		s3://textnet.io/readme.md

deploy: index.main sun.main

%.main: %.js
	serverless deploy function --function $*

.PHONY: all deploy %.main
