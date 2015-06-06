# INSTALL UBUNTU/Node
FROM node:0.12

RUN npm install jshint -g

RUN npm install jshint-stylish


ENTRYPOINT ["bash", "-c", "jshint  --reporter=node_modules/jshint-stylish --exclude-path=/src/app/.gitignore /src/app/"]