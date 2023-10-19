import axios from 'axios'
import { CreateContactDTO } from 'src/interfaces/create-contact.dto'
import { ITestimonial } from 'src/interfaces/testimonial.entity'

export const createContact = async (contactData: CreateContactDTO) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`,
      contactData
    )

    return response.data
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao enviar mensagem')
  }
}

export const findTestimonials = async (): Promise<ITestimonial[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact/testimonials`
    )

    return response.data
  } catch (error) {
    throw new Error(
      // @ts-ignore
      error.response.data.message || 'Erro ao buscar relatos'
    )
  }
}
