import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../errors/AppError";
import { IUsersDTO } from "../../dtos/IUsersDTO";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async create({ birth_date, city, education, email, full_name, password, state }: IUsersDTO): Promise<void> {
    const user = this.repository.create({
      birth_date,
      city,
      education,
      email,
      full_name,
      password,
      state,
    });

    try {
      await this.repository.save(user);
    } catch {
      throw new AppError("Email already exists!");
    }
  }
}

export { UsersRepository };
