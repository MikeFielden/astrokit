# INSTALL UBUNTU/NODE
FROM node:0.12

RUN npm install -g mocha babel

RUN npm install chai sinon sinon-chai

COPY ./setup.js .
COPY ./mocha.sh .

RUN chmod +x mocha.sh

CMD ./mocha.sh
