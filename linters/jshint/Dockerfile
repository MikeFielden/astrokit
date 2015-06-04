FROM nodesource/node:jessie

RUN npm install gulp -g

ADD ./ /src/astro_code

WORKDIR /src/astro_code

RUN npm install

ENTRYPOINT ["bash", "-c", "npm run lint"]