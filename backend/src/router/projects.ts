import express from "express";

import { createProject, getOwnerProjects } from "../controllers/projects";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.post("/create-project", isAuthenticated, createProject);

  router.post("/get-projects", isAuthenticated, getOwnerProjects);
};
