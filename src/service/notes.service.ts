import axios from 'axios'
import { CreateNotesDTO } from 'src/interfaces/create-notes.dto'

export const createNotes = async (notesData: CreateNotesDTO) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/notes`,
      notesData
    )

    return response.data
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao salvar anotações')
  }
}

export const findNotesByCardAndUser = async (
  cardId: string,
  userId: string
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/notes/card-id/${cardId}/user-id/${userId}`
    )

    return response.data
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao buscar anotações')
  }
}
