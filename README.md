# [PORTIFOLIO] - Node.JS Rest API with User Authentication

## To run the API

1. Clone the project
   `git clone ${project_url}`
2. Install the dependencies with npm
   `npm install`
3. Set the enviroment variables on `.env` such as the `.env-example` file
4. Create a database cluster on [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) and add the connection string to the **MONGO_CLUSTER** at the enviroment variables. Add the User and Password to **MONGO_USER_ADMIN** and **MONGO_PASSWORD** as well.
5. Run `npm start` at terminal

> Note: The Database will start unseeded and unfortunately for now I do not have a seeded db to provide.

## Docs

> **[POST] /auth/register**
>
> Requisition:
>
> ```json
> Expected body:
> {
> "email": "string",
> "password": "string",
> "username": "string"
> }
> ```
>
> Response:
>
> ```json
> Expected body:
> {
> "username": "string",
> "email": "string",
> "authentication": {
> "password": "string",
> "salt": "string"
> },
> "_id": "hex64",
> "__v": 0
> }
> ```

---

> **[POST] /auth/login**
>
> Requisition:
>
> ```json
> Expected body:
> {
> "email": "string",
> "password": "string",
> }
> ```
>
> Response:
>
> ```json
> Expected body:
> {
> "authentication": {
>  "password": "string",
>  "salt": "string"
> },
> "_id": "hex64",
> "username": "string",
> "email": "string",
> "__v": 0
> }
> ```

---

> **[GET] /users**
>
> Requisition:
>
> ```json
> Expected body:
> {}
> ```
>
> Response:
>
> ```json
> Expected body:
> [
>   {
>     "_id": "hex64",
>     "username": "string",
>     "email": "string",
>     "__v": 0
>   },
>   {}...
> ]
> ```

---

> **[DELETE] /users/:id**
>
> Requisition:
>
> ```json
> Expected body:
> {}
> ```
>
> Response:
>
> ```json
> Expected body:
>   {
>     "_id": "hex64",
>     "username": "string",
>     "email": "string",
>     "__v": 0
>   },
>
> ```

---

> **[PATCH] /users/:id**
>
> Requisition:
>
> ```json
> Expected body:
> {
>  "username": "string",
> }
> ```
>
> Response:
>
> ```json
> Expected body:
>   {
>     "_id": "hex64",
>     "username": "string",
>     "email": "string",
>     "__v": 0
>   },
>
> ```
