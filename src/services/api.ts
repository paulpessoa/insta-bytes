const API_URL = import.meta.env.VITE_API_URL;

import axios from "axios";

export async function fetchImages() {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
}
