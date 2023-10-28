import axios from 'axios'
import { CreateSpreadDTO } from 'src/interfaces/create-spread.dto'

export const generateSpreadPDF = async (spreadData: CreateSpreadDTO): Promise<Blob> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/spread/generate`,
      spreadData,
      {
        responseType: 'arraybuffer'
      }
    )
    const blob = new Blob([response.data], { type: 'application/pdf' })

    return blob;
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao gerar pdf da tiragem')
  }
}

export const sendSpreadMail = async (spreadData: FormData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/spread/send-mail`,
      spreadData
    )

    return response.data
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao enviar pdf da tiragem por e-mail')
  }
}
