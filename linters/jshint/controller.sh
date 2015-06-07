
#if [ $ASTROCMD = 'jshint:watch' ]
#then
	#inotifywait /src/app
#else
	./jshint.sh
#fi