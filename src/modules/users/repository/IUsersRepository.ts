import { IUsersDTO } from "../dtos/IUsersDTO";
import { Users } from "../entities/Users";

interface IUsersRepository {
  create(data: IUsersDTO): Promise<void>;
  findByEmail(email: string): Promise<Users>;
  findById(id: number): Promise<Users>;
}

export { IUsersRepository };
