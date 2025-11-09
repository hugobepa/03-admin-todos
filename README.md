# Development
Pasos para levantar la app en desarrollo


1. Levantar la base de datos
```
docker compose up -d
```

2. Crear una copia de el .env.template y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ```npm install``` para reconstruir los módulos de node
5. Ejecutar el comando ```npm run dev``` para ejecutar aplicación en desarrollo
6. Ejecutar estos comandos de Prisma
```
npx prisma migrate dev
npx prisma generate
```
7. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)



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
 
 # prisma postgres

 1. Pagina oficial prisma [pagina oficial](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma)
 2. Pagina oficial postgres + prisma [next + prisma +postgres](https://vercel.com/guides/nextjs-prisma-postgres)
 3. prisma pagination next [next + prisma + pagination](https://www.prisma.io/docs/orm/prisma-client/queries/pagination)
 4. route cookies next [next + route +cookies](https://nextjs.org/docs/app/api-reference/file-conventions/route)
5. validacion POST route esquemas yup [validacion + post + route](https://www.npmjs.com/package/yup)
6. prisma client reference[prisma+client](https://www.prisma.io/docs/orm/reference/prisma-cli-reference)

#prisma mongo

1. Pagina oficial mongo + prisma [next + prisma + mongo](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/next-steps)
 2. video mongo + prisma [next + prisma + mongo](https://www.youtube.com/watch?v=QXxy8Uv1LnQ)

#ORM
 9. typeORM [typeORM](https://typeorm.io/)
 10. typeORM GitHub [typeORM + github](https://github.com/typeorm/typeorm)

#otros
2. reacts icons [npm install react-icons --save](https://www.npmjs.com/package/react-icons)


# post postman

2fc336e9-418a-4aa8-90d7-fd9f91b69f5c
post  http://localhost:3000/api/todos/
json:
 {
    "description": "conquistar el mundo",
    "complete": true
}

 #section_10_Next_restApi_final