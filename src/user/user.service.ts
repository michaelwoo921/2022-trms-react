import axios from 'axios';
import { User } from './user';

class UserService {
  private URI;
  constructor() {
    this.URI = 'http://localhost:3000/api/users';
  }

  async getLogin(): Promise<User> {
    return await axios
      .get(this.URI, { withCredentials: true })
      .then((result) => {
        return result.data;
      });
  }

  async login(u: User) {
    const result = await axios.post(this.URI, u, { withCredentials: true });
    return result.data;
  }

  async logout(): Promise<null> {
    return await axios.delete(this.URI).then((result) => {
      return null;
    });
  }

  updateUser(u: User) {
    return axios.put(this.URI, u).then((result) => {
      return null;
    });
  }
}

export default new UserService();
