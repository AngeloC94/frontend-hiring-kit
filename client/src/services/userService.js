import { API_BASE_URL } from "../constants";

export const userService = {
  getAllUsers,
};

async function getAllUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/clienti/elenco`);
    const result = await response.json();
    return result.payload;
  } catch (error) {
    console.error("Errore nel caricamento dei dati:", error);
    throw error;
  }
}

