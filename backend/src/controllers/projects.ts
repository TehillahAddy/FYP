import express from "express";
import {
  createProject as createProjectDB,
  getProjectsByOwnerId,
} from "../db/projects";

export const createProject = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { ownerID, name, description } = req.body;

    if (!ownerID || !name || !description) {
      return res.sendStatus(400);
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
    const { ownerID } = req.body;

    if (!ownerID) {
      return res.status(400).json({ message: "Owner ID is required" });
    }

    const projects = await getProjectsByOwnerId(ownerID);

    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error getting projects" });
  }
};
