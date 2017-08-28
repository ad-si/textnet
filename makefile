all:

deploy:
	s3cmd sync --acl-public readme.md s3://textnet.io
	s3cmd modify \
		--add-header='Content-Type: text/markdown; charset=utf-8' \
		s3://textnet.io/readme.md
