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

export const recoverPassword = async (recoverData: { email: string }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/recover-password`,
      recoverData
    )

    return response.data
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao recuperar senha')
  }
}

export const updatePassword = async (token: string, password: string) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/update-password`,
      {
        token,
        password,
      }
    )

    return response.data
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao atualizar senha')
  }
}
