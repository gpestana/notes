FROM node:4.7.2-wheezy

LABEL engine.version="dev"

COPY . src/
WORKDIR src/

RUN npm install

ENTRYPOINT [ "echo", "'hello'" ]
