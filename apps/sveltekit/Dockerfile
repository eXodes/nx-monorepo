FROM node:latest AS dev

WORKDIR /home

USER root

COPY package.json package-lock.json ./

RUN npm install -g nx
RUN npm install

EXPOSE 3000
EXPOSE 24678

CMD ["nx", "run", "sveltekit:serve"]

FROM node:latest AS build

WORKDIR /home

COPY . .

RUN npm install

RUN npx nx run sveltekit:build

RUN npm ci --production

FROM node:alpine AS serve

USER node:node

WORKDIR /home/apps/sveltekit

COPY --from=build --chown=node:node /home/dist/apps/sveltekit ./build
COPY --from=build --chown=node:node /home/node_modules ./node_modules
COPY --chown=node ./apps/sveltekit/package.json .

ENV PORT 3000
EXPOSE 3000

CMD ["node", "./build"]
