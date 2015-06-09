# INSTALL UBUNTU / NODE / NPM
FROM node:0.12

#UPDATE APT-GET AND INSTALL DNOTIFY FOR DIRECTORY WATCHING
RUN apt-get update && apt-get install -y inotify-tools

# INSTALL NODE MODULES
RUN npm install -g jshint watch
RUN npm install jshint-stylish

# COPY .JSHINTRC FILE ONE LEVEL UP FROM SRC/APP,
# THIS WILL MAKE IT THE FALLBACK DEFAULT IF THE CALLING PROJECT DOES NOT CONTAIN ONE
COPY ./.jshintrc /src/

COPY ./jshint.sh jshint.sh
RUN chmod +x jshint.sh

COPY ./controller.sh controller.sh
RUN chmod +x controller.sh

CMD ./controller.sh
