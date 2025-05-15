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

👉 Created three separate DB collections called users, posts, comments & stored the data in the appropriate DB collection.
👉 User growth metrics and trip analytics

👉 Created a video for smooth experience.

## <a name="quick-start" style='text-decoration:none;'> 🚀 Quick Start</a>

**Initialize & Installation**

Initialize and Install the project dependencies using npm:

```bash
# create folder
mkdir swift
cd swift
mkdir src
cd src
mkdir models controllers routes db utils
touch server.ts

# initialize npm
npm init -y

# fixed dependencies
npm install mongodb@5.1.0
npm install --save-dev typescript@5.0.2

# other dependencies
npm install axios
npm install express

# for requests
npm install http

# restart server automatic when file changes
npm install --save-dev nodemon ts-node 

# to install node_modules
npm install

```

**Set Up TypeScript Config**


```bash
npx tsc --init
```

<details>
<summary><code>tsconfig.json</code></summary>

```tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",                                  
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,   
    "strict": true,
    "skipLibCheck": true,
    "moduleResolution": "node",
    "types": ["node", "express"]  
  },
  "include": [
    "./src/**/*.ts",
    "./src/**/*.js"
  ],
}
```

</details>
<br />

**Set Up TypeScript Interfaces**


```bash
touch src/models/User.ts
touch src/models/Post.ts
touch src/models/Comment.ts
```

<details>
<summary><code>User.ts</code></summary>

```User.ts
export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

```

</details>

<details>
<summary><code>Post.ts</code></summary>

```Post.ts
export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments: Comment[];
}
```
</details>

<details>
<summary><code>Comment.ts</code></summary>

```Comment.ts
export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
```
</details>

<br />

**Set Up nodemon.json Config**


```bash
touch nodemon.json
```

<details>
<summary><code>nodemon.json</code></summary>

```nodemon.json
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node src/server.ts"
}
```

</details>
<br />

**Running the Project**

```bash
nodemon src/server.ts
```
- if nodemon not installed then use:
```bash
npx ts-node src/server.ts
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
<br />
For more details watch [Video.](https://drive.google.com/file/d/1_Hl1Ds3LsuCWHkKFS5PVoPk0uoemVQjW/view?usp=drive_link)

## <a name="folder-structure" style='text-decoration:none;'>📁 Folder Structure</a>
**Project Folder Structure**
```
swift/
├── node_modules/
├── package.json
├── package-lock.json
├── tsconfig.json
├── nodemon.json
├── README.md
├── server.http
└── src/
    ├── server.ts
    ├── utils/
    ├── db/
    ├── models/
    ├── controllers/
    └── routes/
```