import { HelloController } from '@controllers/hello.controller';
import { Router } from 'express';

export const helloRouter = new HelloController(Router()).getRoutes();
