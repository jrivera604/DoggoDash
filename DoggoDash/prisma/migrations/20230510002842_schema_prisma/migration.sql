-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT,
    "lastname" TEXT,
    "streetAddress" TEXT,
    "city" TEXT,
    "province" TEXT,
    "postalCode" TEXT,
    "email" TEXT,
    "passworrd" TEXT,
    "user_type" TEXT,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "rate" INTEGER,
    "sitterAvailability" TEXT
);
INSERT INTO "new_User" ("city", "createdAt", "email", "firstname", "id", "lastname", "passworrd", "postalCode", "province", "rate", "sitterAvailability", "streetAddress", "updatedAt", "user_type") SELECT "city", "createdAt", "email", "firstname", "id", "lastname", "passworrd", "postalCode", "province", "rate", "sitterAvailability", "streetAddress", "updatedAt", "user_type" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
