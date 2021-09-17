import AppError from '@shared/errors/AppError';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import UserInterface from '../interface/UserInterface';
import UserModel from '../model/userModel';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: UserInterface;
  token: string;
}
export default class CreateSessionService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new AppError('Incorrect email/password co', 401);
    }
    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination', 401);
    }
    const token = sign({}, authConfig.jwt.secret, {
      subject: user._id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
