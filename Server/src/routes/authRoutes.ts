// src/routes/authRoutes.ts


// import express from 'express';
// import { Route, Post, Request, Response } from 'tsoa'; // Import Request and Response decorators

// import { login, register, refreshToken } from '../controllers/authController';

// @Route('auth')
// export class AuthRoutes extends express.Router {
  
//   @Post('/login')
//   public async loginUser(@Request() req: express.Request, @Response() res: express.Response): Promise<void> {
//     await login(req, res); // Pass req and res to the login function
//   }

//   @Post('/register')
//   public async registerUser(@Request() req: express.Request, @Response() res: express.Response): Promise<void> {
//     await register(req, res); // Pass req and res to the register function
//   }

//   @Post('/refresh-token')
//   public async refreshAccessToken(@Request() req: express.Request, @Response() res: express.Response): Promise<void> {
//     await refreshToken(req, res); // Pass req and res to the refreshToken function
//   }
// }

// export default new AuthRoutes().routes;


import express from 'express';
import { login, register, refreshToken } from '../controllers/authController';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/refresh-token', refreshToken);

export default router;
