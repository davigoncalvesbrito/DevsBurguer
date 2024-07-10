import { hashPassword, comparePassword } from '../utils/passwordHashUtils';
import { isValidBrazilianPhoneNumberFormat } from '../utils/ValidBrazilianPhoneUtils';
export class User {
  constructor(
    public id: string,
    public name: string,
    public phone: string,
    public password: string,
    public address: string,
  ) {
    this.validateFields();
  }
  async setPassword(password: string): Promise<void> {
    // Hash da senha antes de salvar o usuário
    this.password = await hashPassword(password);
  }

  async verifyPassword(password: string): Promise<boolean> {
    // Verifica se a senha fornecida corresponde ao hash armazenado
    return await comparePassword(password, this.password);
  }
  private validateFields(): void {
    if (
      !this.id ||
      !this.name ||
      !this.phone ||
      !this.password ||
      !this.address
    ) {
      throw new Error('Todos os campos devem ser preenchidos');
    }

    // Validar o formato do telefone (formato brasileiro 9xxxx-xxxx)
    if (!isValidBrazilianPhoneNumberFormat(this.phone)) {
      throw new Error(
        'Telefone deve estar no formato brasileiro válido (9xxxx-xxxx)',
      );
    }
  }
}
