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
}
