# INSTALL UBUNTU/Node
FROM node:0.12

RUN npm install mocha babel -g

WORKDIR /src/app

ENTRYPOINT ["bash", "-c", "mocha --compilers js:babel/register"]
