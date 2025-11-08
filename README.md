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
npx prisma generate


# Prod


# Stage

# Links
 
 # prisma

 1. Pagina oficial prisma [pagina oficial](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma)
 2. Pagina oficial postgres + prisma [next + prisma +postgres](https://vercel.com/guides/nextjs-prisma-postgres)
 3. Pagina oficial mongo + prisma [next + prisma + mongo](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/next-steps)
 4. video mongo + prisma [next + prisma + mongo](https://www.youtube.com/watch?v=QXxy8Uv1LnQ)
 3. prisma pagination next [next + prisma + pagination](https://www.prisma.io/docs/orm/prisma-client/queries/pagination)
 3. route cookies next [next + route +cookies](https://nextjs.org/docs/app/api-reference/file-conventions/route)
3. validacion POST route esquemas yup [validacion + post + route](https://www.npmjs.com/package/yup)
 5. typeORM [typeORM](https://typeorm.io/)
 5. typeORM GitHub [typeORM + github](https://github.com/typeorm/typeorm)

# post postman

2fc336e9-418a-4aa8-90d7-fd9f91b69f5c
post  http://localhost:3000/api/todos/
json:
 {
    "description": "conquistar el mundo",
    "complete": true
}

 