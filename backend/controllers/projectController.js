const Portfolio = require("../models/Portfolio");

// Get all projects
exports.getProjects = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    res.status(200).json({
      success: true,
      data: portfolio.projects || [],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single project by index
exports.getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    const project = portfolio.projects[id];

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create project
exports.createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      technologies,
      githubLink,
      liveLink,
      category,
      featured,
      image,
    } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, description, and category are required",
      });
    }

    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    const newProject = {
      title,
      description,
      technologies: technologies || [],
      githubLink: githubLink || "",
      liveLink: liveLink || "",
      category,
      featured: featured || false,
      image: image || "",
    };

    portfolio.projects.push(newProject);
    await portfolio.save();

    res.status(201).json({
      success: true,
      data: portfolio.projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update project
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      technologies,
      githubLink,
      liveLink,
      category,
      featured,
      image,
    } = req.body;

    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    if (!portfolio.projects[id]) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Update fields
    if (title) portfolio.projects[id].title = title;
    if (description) portfolio.projects[id].description = description;
    if (technologies) portfolio.projects[id].technologies = technologies;
    if (githubLink !== undefined)
      portfolio.projects[id].githubLink = githubLink;
    if (liveLink !== undefined) portfolio.projects[id].liveLink = liveLink;
    if (category) portfolio.projects[id].category = category;
    if (featured !== undefined) portfolio.projects[id].featured = featured;
    if (image !== undefined) portfolio.projects[id].image = image;

    await portfolio.save();

    res.status(200).json({
      success: true,
      data: portfolio.projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete project
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    if (!portfolio.projects[id]) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    portfolio.projects.splice(id, 1);
    await portfolio.save();

    res.status(200).json({
      success: true,
      data: portfolio.projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
