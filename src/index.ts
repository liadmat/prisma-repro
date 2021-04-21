import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function create() {
    await prisma.user.create({ data: { username: "1" } });
    await prisma.user.create({ data: { username: "2" } });
    await prisma.user.create({ data: { username: "3" } });
    await prisma.user.create({ data: { username: "4" } });
    await prisma.user.create({ data: { username: "5" } });
}

async function findMany() {
    const users = await prisma.user.findMany({})

    users.forEach(async user => {
        await prisma.task.findMany({ where: { ownerUsername: user.username } });
    });
}

// void create();

void findMany();

// prisma:query SELECT `main`.`User`.`username` FROM `main`.`User` WHERE 1=1 LIMIT ? OFFSET ?
// prisma:query SELECT `main`.`Task`.`id`, `main`.`Task`.`title`, `main`.`Task`.`ownerUsername` FROM `main`.`Task` WHERE `main`.`Task`.`ownerUsername` = ? LIMIT ? OFFSET ?
// prisma:query SELECT `main`.`Task`.`id`, `main`.`Task`.`title`, `main`.`Task`.`ownerUsername` FROM `main`.`Task` WHERE `main`.`Task`.`ownerUsername` = ? LIMIT ? OFFSET ?
// prisma:query SELECT `main`.`Task`.`id`, `main`.`Task`.`title`, `main`.`Task`.`ownerUsername` FROM `main`.`Task` WHERE `main`.`Task`.`ownerUsername` = ? LIMIT ? OFFSET ?
// prisma:query SELECT `main`.`Task`.`id`, `main`.`Task`.`title`, `main`.`Task`.`ownerUsername` FROM `main`.`Task` WHERE `main`.`Task`.`ownerUsername` = ? LIMIT ? OFFSET ?
// prisma:query SELECT `main`.`Task`.`id`, `main`.`Task`.`title`, `main`.`Task`.`ownerUsername` FROM `main`.`Task` WHERE `main`.`Task`.`ownerUsername` = ? LIMIT ? OFFSET ?