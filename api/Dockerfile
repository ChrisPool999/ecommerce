FROM node:22 as base
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

FROM base AS development

CMD ["npx", "nodemon"]

FROM base AS production

RUN npm run build

CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]