FROM node:12.18.3-alpine3.12 as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.1-alpine as prod-stage
COPY --from=build-step /app/dist/ui_inventory /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]