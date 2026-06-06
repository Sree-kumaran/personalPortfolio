import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const portfolioApi = axios.create({
  baseURL: API_BASE_URL,
})

const getPortfolio = async () => {
  const response = await portfolioApi.get('/api/portfolio')
  return response.data
}

export { getPortfolio }

export default {
  getPortfolio,
}
