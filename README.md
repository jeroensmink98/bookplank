# Bookplank.app

Your own personal bookplank to keep track of your books.

Features

- add books to your read list
- review books
- adding books using their ISBN-10 or ISBN-13

## development

- create an `.env.local` in the root and paste the following:

```.env
GOOGLE_BOOKS_API_URL="https://www.googleapis.com/books/v1"
```

## Prisma

create SQL migration file and execute it

`pnpm exec prisma migrate dev`

Generate Prisma Client

prisma migrate dev will also generate the Prisma client, but if you need to generate it again manually you can run the following command.

`pnpm exec prisma generate`.