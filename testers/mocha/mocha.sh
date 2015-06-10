echo '*************    starting mocha    *****************'

mocha --compilers js:babel/register "./setup.js" "/src/app/test"

echo '*************    completed mocha    *****************'
