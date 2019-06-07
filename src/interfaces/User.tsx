export default interface User {
  id: number | string;
  name: string;
  address: string;
  company: string;
  email: string;
  phone?: string;
  username?: string;
  website?: string;
  [key: string]: any;
}
