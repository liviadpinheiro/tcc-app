export interface CreateUserDTO {
  fullName: string
  cpf: string
  password: string
  confirmPassword: string
  email: string
  confirmEmail: string
  birthdate?: Date
}
