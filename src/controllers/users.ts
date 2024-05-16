import express from 'express';
import { getUsers } from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

//TODO:
export const getUserById = async (req: express.Request, res: express.Response) => {}
//TODO:
export const deleteUser = async (req: express.Request, res: express.Response) => {}
//TODO:
export const updateUser = async (req: express.Request, res: express.Response) => {}