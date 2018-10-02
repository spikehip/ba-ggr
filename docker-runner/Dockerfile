FROM node
MAINTAINER Andras Bekesi <andras.bekesi@bikeonet.hu>
USER root

RUN npm -g install ionic
RUN npm -g install cordova
RUN mkdir -p /app

VOLUME /app
EXPOSE 8100
WORKDIR /app

CMD ionic serve --address 0.0.0.0 --port 8100
