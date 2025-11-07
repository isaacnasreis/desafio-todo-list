# Desafio Técnico: TO-DO List Full-Stack (Vue.js + Node.js)

Este é um projeto completo de TO-DO List desenvolvido como desafio técnico. A aplicação utiliza uma arquitetura moderna de monorepo, separando o Frontend (Vue.js) e o Backend (Node.js API) em serviços independentes.

---

### 🚀 Links (Ao Vivo)

- **Aplicação (Frontend):** [https://desafio-todo-list-five.vercel.app/](https://desafio-todo-list-five.vercel.app/)
- **API (Backend):** [https://desafio-todo-list-isaac.onrender.com/api/v1/tasks](https://desafio-todo-list-isaac.onrender.com/api/v1/tasks)

_(Nota: O backend está num plano gratuito e pode "dormir" após 15 minutos de inatividade. O primeiro carregamento pode demorar 30-60 segundos para "acordar" o servidor.)_

---

### 🛠️ Tecnologias Utilizadas

| Categoria          | Tecnologia                   | Justificativa                                                                  |
| :----------------- | :--------------------------- | :----------------------------------------------------------------------------- |
| **Frontend**       | Vue 3 (Composition API)      | Framework reativo e moderno para a UI.                                         |
| **Estilo**         | TailwindCSS                  | Utility-first CSS para prototipagem rápida e design consistente.               |
| **Estado (FE)**    | Pinia                        | Gerenciador de estado oficial do Vue, leve e intuitivo.                        |
| **Cliente HTTP**   | Axios                        | Camada de serviço desacoplada para consumir a API.                             |
| **Feedback (UX)**  | Vue-Toastification           | Notificações de sucesso e erro (Toasts).                                       |
|                    |                              |                                                                                |
| **Backend**        | Node.js + Express            | API RESTful modular, leve e escalável.                                         |
| **Banco de Dados** | MySQL (hospedado no Railway) | Banco de dados relacional robusto.                                             |
| **ORM**            | Prisma                       | ORM moderno que garante segurança (type-safety) e produtividade.               |
| **Validação**      | Zod                          | Validação de schema (Schema-first) para proteger a API contra dados inválidos. |
|                    |                              |                                                                                |
| **Deploy (FE)**    | Vercel                       | Plataforma para deploy de frontends estáticos/Jamstack.                        |
| **Deploy (BE)**    | Render                       | Hospedagem para serviços Node.js com variáveis de ambiente seguras.            |

---

### 🌟 Features

- **Arquitetura Modular:** O backend utiliza uma arquitetura (Rotas -> Controladores -> Serviços) para separação total de responsabilidades.
- **Validação de API:** A API é protegida com Zod, impedindo dados inválidos de chegarem ao banco.
- **UX Polida:** A interface lida com todos os 4 estados: Loading (overlay global), Erro (toasts), Vazio (empty state) e Dados.
- **Código Reativo:** O estado é centralizado no Pinia, permitindo atualizações otimistas da UI sem a necessidade de recarregar a página.
