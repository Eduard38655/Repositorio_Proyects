import cookieParser from 'cookie-parser';
import cors from "cors";
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Email_Message from "../Proyectos/BanckedControllers/Email_Message.js";
const secretKey = 'mi_clave_secreta'; 

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Middleware
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Asegura que "public" es el directorio correcto
app.use(cors({ credentials: true, origin: "http://localhost:5173",exposedHeaders: ['set-cookie'] }));
app.use(cookieParser());
 



app.use("/", Email_Message )

 app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
 