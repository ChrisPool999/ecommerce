FROM node:22

WORKDIR /app

COPY package*.json ./
COPY api/package*.json ./api/
COPY shared/package*.json ./shared/

RUN npm install

COPY shared/ ./shared/
COPY api/ ./api

WORKDIR /app/api
RUN npx prisma generate

ENV PORT=5000

EXPOSE 5000

CMD ["npx", "ts-node", "--esm", "/app/api/src/index.ts"]