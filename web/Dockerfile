FROM node:22

WORKDIR /app

COPY package*.json ./
COPY web/package*.json ./web/
COPY shared/package*.json ./shared/

RUN npm install

COPY shared/ ./shared/
COPY web/ ./web/

WORKDIR /app/web

ENV PORT=3000
EXPOSE 3000

CMD [ "npm", "run", "dev"]
