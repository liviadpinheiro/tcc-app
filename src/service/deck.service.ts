import axios from 'axios'
import { IDeck } from 'src/interfaces/deck.entity';

export const findAllDecks = async (): Promise<IDeck[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/deck`)

    return response.data;
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao buscar decks')
  }
}
