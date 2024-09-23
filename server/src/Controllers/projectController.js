const deleteImage = require("../Helpers/deleteImage");
const Project = require("../Models/projectModel");
const createError = require("http-errors");

// /api/projects POST
const handleCreateProject = async (req, res) => {
  try {
    const { projectTitle, projectDesc, projectLink } = req.body;
    const projectImage = req.file ? `/projectImages/${req.file.filename}` : "";

    const newProject = new Project({
      projectTitle,
      projectDesc,
      projectImage,
      projectLink,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleGetProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handleUpdateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res
        .status(404)
        .json({ message: "Project not found with this id" });
    }
    console.log(project);
    const { projectTitle, projectDesc, projectLink } = req.body;
    const projectImage = req.file
      ? `/projectImages/${req.file.filename}`
      : undefined;

    // If a new image is provided, delete the old image
    if (projectImage && project.projectImage) {
      deleteImage(project.projectImage);
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        projectTitle,
        projectDesc,
        projectLink,
        ...(projectImage && { projectImage }), // Only update image if a new one is provided
      },
      { new: true } // Return the updated document
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Error with update project" });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error with update project ", error });
  }
};

const handleDeleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      throw createError(404, "Project not found");
    }

    // Delete the project image if it exists
    if (project.projectImage) {
      deleteImage(project.projectImage);
    }

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    next(createError(500, error.message));
  }
};

module.exports = {
  handleCreateProject,
  handleGetProjects,
  handleUpdateProject,
  handleDeleteProject,
};
