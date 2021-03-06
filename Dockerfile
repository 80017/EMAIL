FROM node:boron
MAINTAINER arpitapatel0611@gmail.com


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install


# Bundle app source
COPY app.js /usr/src/app

copy index.html /usr/src/app

EXPOSE 8051

CMD [ "node", "app.js" ]
