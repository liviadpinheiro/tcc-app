import axios from 'axios'
import { CreateUserDTO } from 'src/interfaces/create-user.dto'

export const createUser = async (userData: CreateUserDTO) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
      userData
    )

    return response.data
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao fazer cadastro')
  }
}
