// const API_URL = import.meta.env.VITE_API_URL;

// export async function fetchImages() {
//   try {
//     const response = await fetch("");
//     console.log(JSON.stringify(response));      
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Erro ao buscar dados:", error);
//     return [];
//   }
// }



import axios from 'axios';



export async function fetchImages() {
  try {
    const response = await axios.get("https://insta-bytes-back-204994694224.southamerica-east1.run.app/api/posts");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
}

