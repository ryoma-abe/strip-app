import { PrismaTiDBCloud } from "@tidbcloud/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const adapter = new PrismaTiDBCloud({ url: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });
