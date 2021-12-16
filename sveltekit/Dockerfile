FROM node:14.17.0-alpine AS base

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . /usr/src/app
EXPOSE 3000

FROM base AS dev
EXPOSE 24678
ENV CHOKIDAR_USEPOLLING=true
CMD ["npm", "run", "dev"]

FROM base AS prod
RUN npm run build
RUN npm ci --prod
CMD ["node", "build"]