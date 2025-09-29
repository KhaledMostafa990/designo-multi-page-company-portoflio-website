# Database Schema

Prisma (PostgreSQL) initial schema includes a `User` model.

## Env Vars
- DATABASE_URL
- DIRECT_URL

## Models
```
model User {
  id             String   @id @default(cuid())
  email          String   @unique
  supabaseId     String   @unique
  name           String?
  avatar         String?
  timezone       String?  @default("UTC")
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
  subscriptionType SubscriptionType @default(FREE)
  theme           Theme             @default(DARK)
}
```
