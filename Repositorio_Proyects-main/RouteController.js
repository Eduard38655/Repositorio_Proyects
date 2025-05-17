import cookieParser from 'cookie-parser';
import cors from "cors";
import "dotenv/config";
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Email_Message from "../Repositorio_Proyects/BanckedControllers/Email_Message.js";


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Middleware
 let Allow=["https://eduard38655.github.io","http://localhost:5173"]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Asegura que "public" es el directorio correcto
app.use(cors({ credentials: true, origin:Allow,exposedHeaders: ['set-cookie'] }));
app.use(cookieParser());
 



app.use("/", Email_Message )

 app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
 