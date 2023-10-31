FROM node:19-alpine as builder

WORKDIR /app

COPY . . /app/

COPY package.json package.json

RUN npm install

RUN npm build

# Prod
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY /nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]