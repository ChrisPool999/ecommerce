import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/client.ts";

const connectionString = `${process.env.DATABASE_URL}`;
console.log(connectionString);
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ 
    adapter, 
    log: ['query', 'info', 'warn', 'error']
})

export { prisma };