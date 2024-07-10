import { User } from '../models/user';

export class UserService {
  private users: User[] = [];
  private nextId: number = 1;

  private getNextId(): string {
    return this.nextId.toString();
  }

  private incrementNextId(): void {
    this.nextId++;
  }

  async createUser(data: Partial<User>): Promise<User> {
    const newUser = new User(
      this.getNextId(),
      data.name!,
      data.phone!,
      data.password!,
      data.address!,
    );
    this.users.push(newUser);
    this.incrementNextId();
    return newUser;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id); // Busca o usuário pelo ID
  }

  async getAllUsers(): Promise<User[]> {
    return this.users; // Retorna todos os usuários
  }

  async updateUser(id: string, data: Partial<User>): Promise<User | undefined> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return undefined; // Retorna undefined se o usuário não for encontrado
    }

    // Atualiza apenas os campos recebidos e mantém os outros intactos
    const updatedUser = { ...this.users[userIndex], ...data };

    // Valida os campos do usuário atualizado
    const updatedUserInstance = new User(
      updatedUser.id,
      updatedUser.name,
      updatedUser.phone,
      updatedUser.password,
      updatedUser.address,
    );

    this.users[userIndex] = updatedUserInstance;
    return updatedUserInstance;
  }

  async deleteUser(id: string): Promise<User | undefined> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return undefined; // Retorna undefined se o usuário não for encontrado
    }

    const deletedUser = this.users.splice(userIndex, 1)[0];
    return deletedUser;
  }
}
