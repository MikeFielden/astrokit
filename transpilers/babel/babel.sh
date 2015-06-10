echo '*************    starting babel    *****************'

if [ $ASTROCMD = "babel:server" ]
	then
			babel /src/app/app --out-dir /src/app/dist
	else
		if [ $ASTROCMD = "babel:client" ]
			then
				babel /src/public/js --out-dir /src/app/public/dist/js
			else
				babel /src/app/app --out-dir /src/app/dist
				babel /src/app/public/js --out-dir /src/app/public/dist/js
		fi
fi

echo '*************    completed babel    *****************'
