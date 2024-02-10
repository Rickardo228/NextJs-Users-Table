export interface User {
  name: string;
  email: string;
  company: string | null;
  added: string;
  id: number;
}

export type Users = Array<User>;
