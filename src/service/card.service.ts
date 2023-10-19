import axios from 'axios'
import { UUID } from 'crypto';
import { ICard } from 'src/interfaces/card.entity';

export const findAllDeckCards = async (deckId: UUID): Promise<ICard[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/card/deck-id/${deckId}`)

    return response.data;
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao buscar cartas')
  }
}
