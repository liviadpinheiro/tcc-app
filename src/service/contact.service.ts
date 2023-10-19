import axios from 'axios'
import { CreateContactDTO } from 'src/interfaces/create-contact.dto'

export const createContact = async (contactData: CreateContactDTO) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`, contactData)

    return response.data;
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao enviar mensagem')
  }
}
