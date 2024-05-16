import express from 'express';
import pkg from 'lodash';
import { getUserBySessionToken } from '../db/users';

const { get, merge } = pkg;

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const sessionToken = req.cookies["L-AUTH"];
    if(!sessionToken) return res.sendStatus(403);

    const existingUser = await getUserBySessionToken(sessionToken);
    if(!existingUser) return res.sendStatus(403);

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}