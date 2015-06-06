# INSTALL UBUNTU/Node
FROM node:0.12

RUN npm install jshint -g

ADD ./ /src/astro_code

WORKDIR /src/astro_code

RUN npm install

ENTRYPOINT ["bash", "-c", "npm run --silent lint "]