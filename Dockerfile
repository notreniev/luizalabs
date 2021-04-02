FROM node:12.3.1

WORKDIR /usr/src/app

COPY package.json .

COPY tsconfig.json .

RUN npm install --verbose
RUN npm install -g @ionic/cli

COPY . .

CMD ["ionic", "serve", "--external"]

EXPOSE 8100