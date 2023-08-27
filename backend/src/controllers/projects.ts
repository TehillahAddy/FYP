import express from "express";
import {
  createProject as createProjectDB,
  getProjectsByOwnerId,
} from "../db/projects";
import { getUserById } from "../db/users";

export const createProject = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { ownerID, name, description } = req.body;

    if (!ownerID || !name || !description) {
      return res
        .status(400)
        .json({
          message: "Required fields missing",
        })
        .end();
    }

    const user = await getUserById(ownerID);

    if (!user) {
      return res
        .status(400)
        .json({
          message: "User does not exist",
        })
        .end();
    }

    const project = await createProjectDB({ ownerID, name, description });

    return res.status(200).json(project);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getOwnerProjects = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const projects = await getProjectsByOwnerId(id);

    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error getting projects" });
  }
};
