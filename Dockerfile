### STAGE 1: Build ###
FROM node:12.16.1 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.19.6
COPY --from=build /usr/src/app/dist/snakeNg /usr/share/nginx/html
