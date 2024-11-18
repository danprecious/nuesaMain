"use server"

import prisma from "../lib/prismadb";
import { getUserByEmail } from "./getUserByEmail";

export async function createUser(user) {
    try {
      const userExist = await getUserByEmail(user.email);
      if (userExist) return;
      const newUser = await prisma.user.create({ data: user });
      return newUser;
    } catch (error) {
      console.error(error);
      return error;
    }
  }