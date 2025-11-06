# Development
Pasos para levantar la app en desarrollo


1. Levantar la base de datos
```
docker compose up -d
```

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)


# Prisma commnads
```
npm i prisma -D
npx i prisma
npx prisma init
npx prisma migrate dev

-----
https://www.npmjs.com/package/dotenv
prisma.config.ts:

import 'dotenv/config'
import * as dotenv from 'dotenv'

dotenv.config({ path: '/custom/path/to/.env' })
dotenv.config()

-------

npx prisma generate
npm install @prisma/client
npx prisma generate
DATABASE_URL="postgresql://xxxx:xxxxx@localhost:5432/postgres"
opcional https://www.npmjs.com/package/dotenv npm install dotenv --save ( si falla generate)

```



# Prod


# Stage

# Links
 
 # prisma

 1. Pagina oficial prisma [pagina oficial](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma)
 2. Pagina oficial postgres + prisma [next + prisma +postgres](https://vercel.com/guides/nextjs-prisma-postgres)
 3. Pagina oficial mongo + prisma [next + prisma + mongo](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/next-steps)
 4. video mongo + prisma [next + prisma + mongo](https://www.youtube.com/watch?v=QXxy8Uv1LnQ)
 5. typeORM [typeORM](https://typeorm.io/)
 5. typeORM GitHub [typeORM + github](https://github.com/typeorm/typeorm)

 #pasos error

 1. Install `dotenv`, and add `import "dotenv/config";` to your `prisma.config.ts` file to load environment variables from `.env`.
2. Run prisma dev to start a local Prisma Postgres server.
3. Define models in the schema.prisma file.
4. Run prisma migrate dev to migrate your local Prisma Postgres database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and a managed serverless Postgres database. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started