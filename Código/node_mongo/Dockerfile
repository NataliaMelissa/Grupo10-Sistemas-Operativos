FROM node:18

RUN mkdir -p /target/src/app

WORKDIR /target/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
