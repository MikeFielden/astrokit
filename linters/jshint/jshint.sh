echo '*************    starting jshint    *****************'

jshint  --reporter=node_modules/jshint-stylish --exclude-path=/src/app/.gitignore /src/app

echo '*************    completed jshint    *****************'
