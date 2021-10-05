import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class PasswordUtil {
  static toHash = async (password: string): Promise<string> => {
    const salt = randomBytes(8).toString('hex');
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString('hex')}.${salt}`;
  };

  static compare = async (
    hashedPassword: string,
    plaintextPassword: string,
  ): Promise<boolean> => {
    const [hashed, salt] = hashedPassword.split('.');
    const buf = (await scryptAsync(plaintextPassword, salt, 64)) as Buffer;

    return buf.toString('hex') === hashed;
  };
}
