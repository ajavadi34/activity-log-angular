FROM node:latest

LABEL MAINTAINER="AJ"

ENV NODE_ENV=dev
ENV PORT=4200

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]