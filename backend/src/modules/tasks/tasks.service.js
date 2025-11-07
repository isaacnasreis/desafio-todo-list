import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        },
    });
};

export const createTask = async (title) => {
    return await prisma.task.create({
        data: {
            title: title
        },
    });
};

export const updateTask = async (id, title, completed) => {
    return await prisma.task.update({
        where: {
            id: id
        },
        data: {
            title: title,
            completed: completed
        },
    });
};

export const deleteTask = async (id) => {
    return await prisma.task.delete({
        where: {
            id: id
        }
    });
};
