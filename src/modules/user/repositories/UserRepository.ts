import IUserRepository from "../interfaces/IUserRepository";
import prisma from "../../../database/prisma/PrismaClient";
import User from "../model/User";
import { injectable } from "inversify";
import { Prisma } from "@prisma/client";

@injectable()
export default class UserRepository implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (user) {
      const modelUser = new User(
        user.id,
        user.username,
        user.password,
        user.email,
        user.emailVerifiedAt,
        user.lastLogin,
        user.createdAt,
        user.updatedAt,
        user.deletedAt
      );

      return modelUser;
    }

    return null;
  }
  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany();

    if (users) {
      const modelUsers = users.map(
        (u: any) =>
          new User(
            u.id,
            u.username,
            u.password,
            u.email,
            u.emailVerifiedAt,
            u.lastLogin,
            u.createdAt,
            u.updatedAt,
            u.deletedAt
          )
      );
      return modelUsers;
    }

    return [];
  }
  async create(object: User): Promise<boolean> {
    let user: Prisma.UserCreateInput;

    user = {
      id: object.id,
      username: object.username,
      email: object.email,
      password: object.password,
    };

    const createUser = await prisma.user.create({ data: user });

    return createUser ? true : false;
  }
  async update(_id: string, _object: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async delete(_id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
