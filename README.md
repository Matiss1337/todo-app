simple todo app using next.js, tailwind and Prisma as db

To start with prisma, connect to db and create schema, dollow these steps:

https://www.npmjs.com/package/prisma

npm i prisma --save-dev
npx prisma init --datasource-provider sqlite ///starts prisma db

in shcema.prisma
///
model Todo {
id String @id @default(uuid())
title String
complete Boolean
createdAt Datetime @default(now())
updated Datetime @updatedAt
}
///

npx prisma migrate dev --name init ///creates DB and schema and connects to it

in src/ creeate db.ts
import { PrismaClient } from "@prisma/client";
