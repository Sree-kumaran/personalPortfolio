import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const projectService = {
  getProjects: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getProjectById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createProject: async (projectData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/projects`,
        projectData,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateProject: async (id, projectData) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/projects/${id}`,
        projectData,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteProject: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/projects/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default projectService;
