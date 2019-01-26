# Dockerfile
FROM danlynn/ember-cli:3.6.0

LABEL MAINTAINER "PRASANNA VIJAYAN"

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN yarn --pure-lockfile