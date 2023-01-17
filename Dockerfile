# Dockerfile
FROM node:16.11-alpine3.14 as build

# create destination directory
WORKDIR /app
ADD . /app/

# update and install dependency
ENV HOST 0.0.0.0
ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000
ENV NUXT_TARGET=${NUXT_TARGET}

RUN yarn
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]