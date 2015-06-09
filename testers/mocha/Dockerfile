# INSTALL UBUNTU/NODE
FROM node:0.12

RUN npm install -g mocha babel

RUN npm install chai

COPY ./setup.js .

COPY ./controller.sh .
RUN chmod +x controller.sh

CMD ./controller.sh
