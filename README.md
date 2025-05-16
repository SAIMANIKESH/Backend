<div align="center">
  <h1>Backend Project</h1>
</div>

## <a name="preview" style='text-decoration:none;'>🔍 Preview</a>

- Video Link - [Watch](https://drive.google.com/file/d/1_Hl1Ds3LsuCWHkKFS5PVoPk0uoemVQjW/view?usp=drive_link)

## <a name="introduction" style='text-decoration:none;'>🤖 Introduction</a>

Designed a simple Node.js web server/application, having a set of REST endpoints, and using MongoDB to store the details.

## <a name="tech-stack" style='text-decoration:none;'>⚙️ Tech Stack</a>

- Node.js
- Express.js
- TypeScript
- MongoDB

## <a name="features" style='text-decoration:none;'>🔋 Features</a>

👉 Created a Node.js server using default node packages & typescript

👉 All request & response bodies are properly typed

👉 Created three separate DB collections called users, posts, comments & stored the data in the appropriate DB collection

👉 Added bonus feature Pagination and Sorting to fetch data in efficient way

👉 Created a video for smooth experience to run the project

## <a name="quick-start" style='text-decoration:none;'> 🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/SAIMANIKESH/Backend.git
cd Backend
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```
Open `server.http` file and send requests.
<br />
For more details watch [Video.](https://drive.google.com/file/d/1_Hl1Ds3LsuCWHkKFS5PVoPk0uoemVQjW/view?usp=drive_link)

## <a name="folder-structure" style='text-decoration:none;'>📁 Folder Structure</a>
**Project Folder Structure**
```
Backend/
├── .gitignore
├── node_modules/
├── package.json
├── package-lock.json
├── tsconfig.json
├── nodemon.json
├── README.md
├── server.http
└── src/
    ├── server.ts
    ├── db/
    │   └── db.ts
    ├── models/
    │   ├── User.ts
    │   ├── Post.ts
    │   └── Comment.ts
    ├── controllers/
    │   ├── load.controller.ts
    │   └── user.controller.ts
    ├── routes/
    │   ├── load.routes.ts
    │   └── user.routes.ts
    └── utils/
        └── wrapAsync.ts
```

## <a name="reference" style='text-decoration:none;'>📚 Reference Material</a>
Checkout [Here.](https://www.notion.so/Swift-Assignment-Reference-Document-1f3bd483d8d980b2b7f2dced1cb89c03)