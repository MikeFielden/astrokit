echo '*************    starting jshint    *****************'

jshint  --reporter=node_modules/jshint-stylish --exclude-path=/src/.jshintignore /src/app

echo '*************    completed jshint    *****************'
