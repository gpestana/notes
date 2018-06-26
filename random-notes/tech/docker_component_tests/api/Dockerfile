FROM node:4.7.2-wheezy

LABEL api.version="dev"

COPY . src/
WORKDIR src/

RUN npm install

CMD [ "npm", "start" ]
