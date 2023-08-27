import express from "express";

import { getUserByUsername, createUser, getUserByEmail } from "../db/users";
import { authentication, random } from "../helpers";

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const user = await getUserByUsername(username).select(
      "+authentication.salt +authentication.password"
    );

    if (!user) {
      return res.status(400).json({ message: "Login credentials invalid" });
    }

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password != expectedHash) {
      return res.sendStatus(403);
    }

    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );

    await user.save();

    res.cookie("ANTONIO-AUTH", user.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const {
      username,
      email,
      phoneNumber,
      isBusiness,
      firstName,
      lastName,
      password,
    } = req.body;

    console.debug(req.body);
    console.log(
      !username,
      !email,
      !phoneNumber,
      isBusiness === undefined,
      !firstName,
      !lastName,
      !password
    );

    if (
      !username ||
      !email ||
      !phoneNumber ||
      isBusiness === undefined ||
      !firstName ||
      !lastName ||
      !password
    ) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = random();
    const user = await createUser({
      username,
      email,
      phoneNumber,
      isBusiness,
      firstName,
      lastName,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
