import BaseEntity from "../../../utils/BaseEntity";

export default class User extends BaseEntity {
  username: string;
  email: string;
  password: string;
  emailVerifiedAt: Date | null;
  lastLogin: Date | null;

  constructor(
    id: string,
    username: string,
    password: string,
    email: string,
    emailVerifiedAt: Date | null,
    lastLogin: Date | null,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null
  ) {
    super(id, createdAt, updatedAt, deletedAt);
    this.username = username;
    this.email = email;
    this.password = password;
    this.emailVerifiedAt = emailVerifiedAt;
    this.lastLogin = lastLogin;
  }
}
