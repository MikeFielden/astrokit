#!/bin/sh
if [ $ASTROCMD = 'jshint:watch' ]
then
	while inotifywait -r --exclude /src/app/node_modules -e modify /src/app/; do
		echo 'hello world'
		sh ./jshint.sh
	done
else
	sh ./jshint.sh
fi