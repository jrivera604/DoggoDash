/*
  Warnings:

  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Blog";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Message" (
    "timestamp" DATETIME,
    "message" TEXT,
    "receiverId" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "senderId" INTEGER NOT NULL,
    CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dog" (
    "name" TEXT,
    "yearOfBirth" DATETIME,
    "weight" INTEGER,
    "temperament" TEXT,
    "comments" TEXT,
    "image" TEXT,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "breedId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    CONSTRAINT "Dog_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "Breed" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dog_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Breed" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "images" TEXT
);

-- CreateTable
CREATE TABLE "DogSitter" (
    "duration" DATETIME,
    "value" INTEGER,
    "rating" INTEGER,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sitterId" INTEGER NOT NULL,
    "dogId" INTEGER NOT NULL,
    CONSTRAINT "DogSitter_sitterId_fkey" FOREIGN KEY ("sitterId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DogSitter_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT,
    "lastname" TEXT,
    "streetAddress" TEXT,
    "city" TEXT,
    "provinve" TEXT,
    "postalCode" TEXT,
    "email" TEXT,
    "passworrd" TEXT,
    "user_type" BOOLEAN,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "rate" INTEGER,
    "sitterAvailability" TEXT
);
INSERT INTO "new_User" ("email", "id") SELECT "email", "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
