import mongoose from "mongoose";

// Project Config
const ProjectSchema = new mongoose.Schema(
  {
    ownerID: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ProjectModel = mongoose.model("Project", ProjectSchema);

// Create Project
export const createProject = (values: Record<string, any>) =>
  new ProjectModel(values).save().then((project) => project.toObject());

// Get Projects
export const getProjects = () => ProjectModel.find();

// Get Project by ID
export const getProjectById = (id: string) => ProjectModel.findById(id);

// Get Projects by Owner ID
export const getProjectsByOwnerId = (ownerID: string) =>
  ProjectModel.find({ ownerID });

// Update Project
export const updateProjectById = (id: string, values: Record<string, any>) =>
  ProjectModel.findByIdAndUpdate(id, values);

// Delete Project
export const deleteProjectById = (id: string) =>
  ProjectModel.findOneAndDelete({ _id: id });
