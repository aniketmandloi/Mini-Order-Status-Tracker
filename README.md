# Mini-Order-Status-Tracker

Hello, So this is the Assignment I have completed as much as I can according to the requirements. I did Completed all the things with Login, register, order tracking table, etc and made a minimal application, I hope you like it. all the instructions to setup and run the code are mentioned in the readme file (below), Thanks.

## Tech Stack

- **Frontend**: Typescript, React, NextJS.
- **Backend**: Typescript, ExpressJS.
- **Database**: Postgresql, Prisma.
- **Styling**: TailwindCSS, Shadcn.

## Requirements

- Node.js v20.11.0 and above OR use NVM to change the node version.
- Postgesql v15.4.0 and above.
- NPM v9.8.1 and above.

#### you can download all the things from here

- Node.js: https://nodejs.org/en/download/
- NVM: https://github.com/nvm-sh/nvm
- Postgresql: https://www.postgresql.org/download/
- NPM: https://www.npmjs.com/get-npm

## Cloning the repository

- Clone the Repo: `git clone https://github.com/aniketmandloi/Mini-Order-Status-Tracker.git`.

## Frontend

- Go to the frontend folder: `cd frontend`.
- Change the node version to v20: `nvm use 20`.
- Install the dependencies: `npm install`.
- Run the development server: `npm run dev`.
- Go to url: `http://localhost:3000/`.
- for now You'll get the error as we need to setup backend and database first.

## Backend

- Go to the backend folder: `cd backend`.
- Change the node version to v20: `nvm use 20`.
- Start Postgres server, Database should be created while we setup Prisma.
- Install the dependencies: `npm install`.

## Setup Prisma

- Run the Prisma migration: `npx prisma migrate dev`, this should also create the database if not create manually and change the name in DATABASE_URL in .env file according to your database.
- Run the Prisma seed: `npm run seed`, this should seed the database with some sample Orders data.

## Run Server

- Backend - `npm run dev`.
- Frontend - `npm run dev`.
- Go to url: `http://localhost:3000/`.
- Click on the "Get Orders" button to Login or Register and After that you can login and track the orders.
