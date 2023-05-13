/*
  Warnings:

  - You are about to drop the column `firstname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_type` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userType" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "streetAddress" TEXT,
    "city" TEXT,
    "province" TEXT,
    "postalCode" TEXT,
    "email" TEXT,
    "password" TEXT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "rate" INTEGER,
    "sitterAvailability" TEXT
);
INSERT INTO "new_User" ("city", "createdAt", "email", "id", "password", "postalCode", "province", "rate", "sitterAvailability", "streetAddress", "updatedAt") SELECT "city", "createdAt", "email", "id", "password", "postalCode", "province", "rate", "sitterAvailability", "streetAddress", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
