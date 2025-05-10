import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import SQL from "mssql";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const secretKey = 'mi_clave_secreta';

router.use(cors({ 
  credentials: true, 
  origin: "http://localhost:5173",
  exposedHeaders: ['set-cookie'] 
}));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());
router.use(express.static(path.join(__dirname, "public")));

const config = {
  server: "LAPTOP-GNIDI8TC\\SQLEXPRESS",
  database: "Pasteleria",
  user: "EF197ef9",
  password: "123",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// ✅ Middleware para validar el token
function Validate_Token(req, res, next) {
  const token = req.cookies.token;
  console.log("Token recibido:", token);

  if (!token) {
    return res.status(401).json({ Access: false, message: 'Token no encontrado' });
  }

  try {
    const verificado = jwt.verify(token, secretKey);
    req.user = verificado; // Puedes acceder luego a req.user.id, etc.
    req.valid = true;
    next();
  } catch (err) {
    return res.status(403).json({ Access: false, message: 'Token inválido o expirado' });
  }
}

// ✅ Ruta para validar si el token es válido
router.get("/Sucursales/ValidarToken", Validate_Token, (req, res) => {
  res.json({ Access: true });
});

// ✅ Ruta protegida (ejemplo: insertar en inventario)
router.post("/Sucursales/Inventario", Validate_Token, (req, res) => {
  const { ProductosID,Cantidad} = req.body;
  const UserID = 1; // Aquí puedes usar req.user.id si está en el token

  res.cookie('ProductosID', ProductosID, {
    maxAge: 60 * 60 * 1000, // 1 hora en milisegundos
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
  });

  const valores = {
    ProductosID: ProductosID,
    Cantidad: Cantidad
  };
  
  res.cookie('ProductosInfo', JSON.stringify(valores), {
    maxAge: 60 * 60 * 1000, // 1 hora
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  });
  
  
  
  SQL.connect(config)
    .then((pool) => {
      return pool
        .request()
        .input("UserID", SQL.Int, UserID)
        .input("ProductosID", SQL.Int, ProductosID)
        .input("Cantidad", SQL.Int, Cantidad)

        .query(`INSERT INTO Inventario_Cliente(ClienteID, ProductosID,Cantidad) VALUES(@UserID, @ProductosID,@Cantidad)`)
        .then((result) => {
          if (result.rowsAffected[0] > 0) {
            res.json({ message: "Cita agendada con éxito.", valid: true });
             
           
            
          } else {
            res.status(400).json({ error: "No se pudo agendar la cita.", valid: false });
          }
        });
    })
    .catch((error) => {
      console.error("Error en la base de datos:", error.message);
      res.status(500).json({ error: "Error interno del servidor." });
    });
});

// ✅ Ruta para cerrar sesión (logout)
router.post('/Sucursales/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'lax',
    secure: false, // cambia a true en producción con HTTPS
  });
  res.json({ message: 'Sesión cerrada correctamente' });
});

 
