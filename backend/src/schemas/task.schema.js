import {z} from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    title: z.string({
        required_error: "O título é obrigatório",
    }).min(3, {message: "O título deve ter no mínimo 3 caracteres"})
  })
})

export const updatedTaskSchema = z.object({
  params: z.object({
    id: z.string().uuid({message: "O id deve ser um UUID"}),
  }),
  body: z.object({
    title: z.string().min(3).optional(),
    completed: z.boolean().optional(),
  }).partial(),
})

export const deleteTaskSchema = z.object({
  params: z.object({
    id: z.string().uuid({message: "O id deve ser um UUID"}),
  }),
})