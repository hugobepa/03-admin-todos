//import { PrismaClient } from '../app/generated/prisma'

import { PrismaClient } from '@/generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}

const prisma = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma

//import { PrismaClient } from '@/generated/prisma-client';
/*
import { PrismaClient } from '@/generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
     
     
   let globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}
     
    if (process.env.NODE_ENV === 'production') {
      globalForPrisma
    } else {
      if (!(global as any ).prisma) {
        globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())
      }
      globalForPrisma = (global as any ).prisma;
    }
     
    export default globalForPrisma;
*/
