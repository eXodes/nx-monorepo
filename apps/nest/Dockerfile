FROM node:latest AS dev

WORKDIR /home

USER root

COPY package.json package-lock.json ./

RUN npm install -g nx
RUN npm install

EXPOSE 3333

CMD ["nx", "run", "nest:serve"]

FROM node:latest AS build

WORKDIR /home

COPY . .

RUN npm install

RUN npx nx run nest:build

RUN npm ci --production

FROM node:alpine AS serve

USER node:node

WORKDIR /home/apps/nest

COPY package.json package-lock.json ./

COPY --from=build --chown=node:node /home/dist/apps/nest ./build
COPY --from=build --chown=node:node /home/node_modules ./node_modules
COPY --chown=node ./apps/nest/package.json .

ENV PORT 3333
EXPOSE 3333

CMD ["node", "./build"]
