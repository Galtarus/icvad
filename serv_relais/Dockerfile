FROM node:14
WORKDIR /usr/src/app
COPY package*.json server_relais.js ./
RUN npm install
EXPOSE 1111
CMD ["node", "server_relais.js"]