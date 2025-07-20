# 📚 API REST: Books y Usuarios

Este proyecto es una **API RESTful** desarrollada con **Node.js** y **TypeScript**, diseñada para gestionar libros y usuarios. Utiliza **Express** como framework principal, **MongoDB** como base de datos, y autenticación basada en **JWT**.

---

## 🚀 Funcionalidades principales

- 🔐 **Usuarios**: Registro y login con autenticación JWT.
- 📖 **Books**: CRUD de libros asociados a cada usuario autenticado.
- 🏷️ **Géneros**: Acceso a la lista de géneros disponibles.
- ✅ **Validación**: Validación de datos de entrada usando **Zod**.
- 🛡️ **Protección de rutas**: Solo usuarios autenticados pueden acceder a las rutas de libros.


## 🌐 Rutas disponibles

### 🔐 Usuarios → `/api/auth`

| Método | Ruta          | Descripción             |
|--------|---------------|-------------------------|
| POST   | `/register`   | Registro de usuario     |
| POST   | `/login`      | Login de usuario        |

---

### 📘 Books → `/api/books`

| Método | Ruta         | Descripción                          |
|--------|--------------|--------------------------------------|
| GET    | `/`          | Obtener todos los libros del usuario |
| POST   | `/`          | Crear un nuevo libro                 |
| PATCH  | `/:id`       | Actualizar un libro existente        |
| DELETE | `/:id`       | Eliminar un libro                    |

---

### 🏷️ Géneros → `/api/genders`

| Método | Ruta         | Descripción                     |
|--------|--------------|---------------------------------|
| GET    | `/`          | Obtener todos los géneros       |

---

## ⚙️ Requisitos

- Node.js `>= 18.x`
- MongoDB (local o en la nube)
- npm

---

## 🛠️ Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
URI_DB=mongodb://localhost:27017/tu_basededatos
JWT_SECRET=tu_clave_secreta
JWT_EXPIRES=86400
PORT=1234

📦 Instalación
Clona el repositorio y entra en la carpeta del proyecto:

git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
Instala las dependencias:

npm install
Compila el proyecto (opcional, para producción):

npm run build
▶️ Ejecución
Modo desarrollo (con recarga automática):

npm run dev
Modo producción (tras compilar):

npm start
El servidor quedará escuchando en el puerto definido en la variable de entorno PORT (por defecto: 1234).

🔐 Autenticación
Para acceder a las rutas protegidas (/api/books, /api/genders) es necesario enviar el token JWT en la cabecera:

Authorization: Bearer <token>
🧪 Ejemplos de uso
✅ Crear un libro:

POST http://localhost:1234/api/books
Content-Type: application/json
Authorization: Bearer <token>

{
  "text": "Harry Potter",
  "gender": "Ficción"
}
📚 Obtener géneros:

GET http://localhost:1234/api/genders
Authorization: Bearer <token>
❌ Eliminar un libro:

DELETE http://localhost:1234/api/books/123456
Authorization: Bearer <token>
🧭 Métodos HTTP utilizados
GET – Obtener datos

POST – Crear datos

PATCH – Actualizar datos

DELETE – Eliminar datos

✍️ Autor
Emmanuel Benitez
🔗 GitHub: https://github.com/emanuel7benitez/

✅ Estado del proyecto
✅ En desarrollo – listo para pruebas con autenticación, gestión de libros y consulta de géneros.

🧰 Tecnologías utilizadas
Node.js

Express

TypeScript

MongoDB con Mongoose

Zod (validaciones)

JWT (autenticación)

Dotenv