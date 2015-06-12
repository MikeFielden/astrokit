# INSTALL UBUNTU / NODE / NPM
FROM node:0.12

# INSTALL NODE MODULES
RUN npm install -g jshint watch
RUN npm install jshint-stylish

# COPY .JSHINTRC FILE ONE LEVEL UP FROM SRC/APP,
# THIS WILL MAKE IT THE FALLBACK DEFAULT IF THE CALLING PROJECT DOES NOT CONTAIN ONE
COPY ./.jshintrc /src/
COPY ./.jshintignore /src/


COPY ./jshint.sh jshint.sh
RUN chmod +x jshint.sh

CMD ./jshint.sh
