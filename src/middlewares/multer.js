import multer from 'multer';
import path from "path";
import fs from "fs";

const __dirname = path.resolve();
const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename:(req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
const ext = path.extname(file.originalname);
cb (null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

export const upload = multer({ storage});
