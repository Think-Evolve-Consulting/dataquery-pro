import bcrypt from 'bcrypt';

export const getSecret = () => 'test_fixme';
const getSalt = () => 10;

export const encrypt = async (plain: string): Promise<string> => {
  return bcrypt.hash(plain, getSalt());
};

export const compare = async (plain: string, encrypted: string): Promise<boolean> => {
  return bcrypt.compare(plain, encrypted);
};
