FROM node:14
LABEL maintainer="dev.apexcel@gmail.com"
LABEL purpose="web server"
WORKDIR /usr/src/app
ADD package*.json ./
RUN npm install
ADD . .
EXPOSE 8000

CMD ["npm", "run", "dev"]