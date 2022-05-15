FROM node:latest AS dev

WORKDIR /home

USER root

COPY package.json package-lock.json ./

RUN npm install -g nx
RUN npm install

EXPOSE 3000
EXPOSE 24678

CMD ["nx", "run", "frontend:serve"]

FROM node:latest AS build

WORKDIR /home

COPY . .

RUN npm install

RUN npx nx run frontend:build

FROM node:alpine AS serve

USER node:node

WORKDIR /home/apps/frontend

COPY --from=build --chown=node:node /home/dist/apps/frontend ./build
COPY --chown=node:node ./apps/frontend/package.json .

ENV PORT 3000
EXPOSE 3000

CMD ["node", "./build"]
