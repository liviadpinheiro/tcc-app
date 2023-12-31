import axios from 'axios'

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      { email, password }
    )

    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token)
      localStorage.setItem('name', response.data.fullName.split(' ')[0])
      localStorage.setItem('userId', response.data.id)

      return response.data
    }
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data.message || 'Erro ao fazer login.')
  }
}
