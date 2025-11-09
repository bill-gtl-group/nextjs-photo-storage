# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Commands

### Development
- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Lints the code.

### Database
- **`npm run db:generate`**: Generates database migration files using Drizzle Kit.
- **`npm run db:migrate`**: Applies database migrations.
- **`npm run db:studio`**: Opens the Drizzle Kit studio to browse the database.

## Code Architecture

This is a Next.js application with the following structure:

- **`src/app`**: Contains the main application logic, including pages and API routes. It uses Next.js route groups for features like `(auth)` and `(chat)`.
- **`src/components`**: Contains reusable UI components.
- **`src/lib`**: Contains shared utilities, libraries, and database-related code.
- **`src/lib/db`**: Contains the Drizzle ORM configuration, schema, and migration logic.
