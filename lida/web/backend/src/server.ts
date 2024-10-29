import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.api.${process.env.NODE_ENV}` });

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { sequelize } from './models';
import { RequestContext } from './context';

import fileUpload from 'express-fileupload';

import { grnRouter } from './routes/grnRouter';

declare global {
  namespace Express {
    interface Request {
      context: RequestContext;
    }
  }
}

const PORT = process.env.PORT || 3001;

// express app
const app = express();

// Middleware

// middleware
app.use(express.json({ limit: '50mb' }));

// file upload
app.use(fileUpload({ createParentPath: true }));

app.use(
  cors({
    // origin: "https://fimpact-app.com", // 접근 권한을 부여하는 도메인
    // credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    // optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  // log path and method for debugging
  console.log(req.path, req.method);
  next();
});

app.options('*', cors());

//route
app.use('/api/grn', grnRouter);

//OCR CORS issue
var allowlist = ['http://localhost:8080/demo'];

type CorsOptions = { origin: boolean };
type Callback = (error: null, options: CorsOptions) => void;
const corsOptionsDelegate = (req: Request, callback: Callback): void => {
  let corsOptions: CorsOptions;
  if (allowlist.indexOf(req.header('Origin') || '') !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

//listen
sequelize.sync().then((_req) => {
  app.listen(PORT, () => {
    console.log(`⚡️ Server is running on port ${PORT}`);
  });
});
