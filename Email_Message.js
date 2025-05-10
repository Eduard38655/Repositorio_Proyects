 
import cors from "cors";
import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 

router.use(cors({ 
  credentials: true, 
  origin: "http://localhost:5173",
  exposedHeaders: ['set-cookie'] 
}));

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
 
router.use(express.static(path.join(__dirname, "public")));
 
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:PROCESS.env.USER,
      pass: PROCESS.env.PASSWORD
    }
  });
  
router.post("/DatosSend/Personal", async (req, res) => {
    const { FullName, Email, Message } = req.body;
  
    
  
    const mailOptions = {
      from: `"${FullName}" <${PROCESS.env.USER}>`,  // campo 'from' :contentReference[oaicite:9]{index=9}
      to: Email,                                    // destinatario dinámico
      subject: `Repository`,
      text: Message
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);  // sendMail :contentReference[oaicite:10]{index=10}
      console.log("Email sent:", info.messageId);
      return res.json({ valid: true, messageId: info.messageId });
      
    } catch (error) {
      console.error("Nodemailer error:", error);
      return res.status(500).json({ valid: false, error: error.message });
    }
  });


export default router