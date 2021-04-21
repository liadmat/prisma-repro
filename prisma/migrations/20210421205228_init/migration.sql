-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "ownerUsername" TEXT NOT NULL,
    FOREIGN KEY ("ownerUsername") REFERENCES "User" ("username") ON DELETE CASCADE ON UPDATE CASCADE
);
