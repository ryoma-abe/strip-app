import { PrismaTiDBCloud } from "@tidbcloud/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const adapter = new PrismaTiDBCloud({ url: process.env.DATABASE_URL! });
// @ts-expect-error - Type compatibility issue between adapter versions
export const prisma = new PrismaClient({ adapter });
