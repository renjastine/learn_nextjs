<!-- install all dependencies -->
npx create-next-app

<!-- to run the project-->
npm run dev 


<!-- SETUP PRISMA -->
npm i -D prisma
npm i @prisma/client

npx primsa init

<!-- create database -->
<!-- setup .env -->
<!-- setup model -->

npx prisma migrate dev --name init


