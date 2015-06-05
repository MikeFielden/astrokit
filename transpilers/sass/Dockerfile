FROM node:0.10

RUN npm install gulp -g

ADD ./ /src/astro_code

WORKDIR /src/astro_code

# There is currently a problem with libsass
# The fix is to npm install and delete then reinstall
RUN npm install && rm -rf /src/astro_code/node_modules && npm install

ENTRYPOINT ["bash", "-c", "npm run sass"]