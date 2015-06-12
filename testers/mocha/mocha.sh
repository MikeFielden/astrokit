echo '*************    starting mocha    *****************'

mocha --compilers js:babel/register --recursive "./setup.js" "/src/app/test"

echo '*************    completed mocha    *****************'
