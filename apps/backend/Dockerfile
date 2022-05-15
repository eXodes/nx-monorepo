FROM node:latest AS dev

WORKDIR /home

USER root

COPY package.json package-lock.json ./

RUN npm install -g nx
RUN npm install

EXPOSE 3333

CMD ["nx", "run", "backend:serve"]

FROM node:latest AS build

WORKDIR /home

COPY . .

RUN npm install

RUN npx nx run backend:build

RUN npm ci --omit=dev

FROM node:alpine AS serve

USER node:node

WORKDIR /home/apps/backend

COPY --from=build --chown=node:node /home/dist/apps/backend ./build
COPY --from=build --chown=node:node /home/node_modules ./node_modules

ENV PORT 3333
EXPOSE 3333

CMD ["node", "./build"]
