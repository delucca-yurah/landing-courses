FROM node:10-alpine as build

ARG GATSBY_HOME
ARG GATSBY_PAGARME_ENCRYPTION_KEY
ARG GATSBY_PAGARME_POSTBACK_URL

RUN apk add git

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY src /usr/src/app/src
COPY gatsby-config.js gatsby-node.js /usr/src/app/
RUN npm run build



FROM gatsbyjs/gatsby:latest AS run
COPY --from=build /usr/src/app/public /pub
