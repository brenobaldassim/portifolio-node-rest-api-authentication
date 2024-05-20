import express from 'express';
import pkg from 'lodash';
import { getUserBySessionToken } from '../db/users';

const { get, merge } = pkg;

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies['L-AUTH'];
    if (!sessionToken) return res.sendStatus(403);

    const existingUser = await getUserBySessionToken(sessionToken);
    if (!existingUser) return res.sendStatus(403);

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    // On "isAuthenticated I merged the user object so with get now I can grab the id"
    const currentUserId = get(req, 'identity._id') as string;

    if (!currentUserId) return res.sendStatus(403);
    else if (currentUserId.toString() !== id) return res.sendStatus(403);

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
