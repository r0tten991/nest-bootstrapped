
export class RegisterDto {
  constructor(init: RegisterDto) {
    this.email = init.email;
    this.password = init.password;
    this.confirmPassword = init.confirmPassword;
  }
  email: string;
  password: string;
  confirmPassword: string;
}