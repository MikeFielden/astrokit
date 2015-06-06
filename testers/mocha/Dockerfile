# INSTALL UBUNTU/Node
FROM node:0.12

RUN npm install mocha -g

RUN npm install mocha babel -g

WORKDIR /src/app

ENTRYPOINT ["bash", "-c"]
CMD ["mocha"]
