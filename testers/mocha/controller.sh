
if [ $ASTROCMD = 'mocha:watch' ]
then
	mocha -w --compilers js:babel/register "./setup.js" "src/app/test"
else
	mocha --compilers js:babel/register "./setup.js" "src/app/test"
fi