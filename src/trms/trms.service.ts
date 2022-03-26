import axios from 'axios';
import { Trms } from './trms';

class TrmsService {
  private URI;
  constructor() {
    this.URI = 'http://localhost:3000/api/trms';
  }

  async getAllTrms(): Promise<Trms[]> {
    return await axios.get(this.URI).then((result) => {
      console.log(result);
      return result.data as Trms[];
    });
  }
  async getTrms(name: string, createdDate: string): Promise<Trms> {
    return await axios
      .get(`${this.URI}/${name}/${createdDate}`)
      .then((result) => {
        console.log(result);
        return result.data as Trms;
      });
  }

  async addTrms(t: Trms): Promise<null> {
    return await axios
      .post(`${this.URI}/${t.name}/${t.createdDate}`, t)
      .then((result) => {
        console.log(result);
        return null;
      });
  }

  async updateTrms(t: Trms) {
    return await axios
      .put(`${this.URI}/${t.name}/${t.createdDate}`, t)
      .then((result) => {
        console.log(result);
        return null;
      });
  }

  async deleteTrms(name: string, createdDate: string) {
    console.log(name, createdDate);
    return axios.delete(`${this.URI}/${name}/${createdDate}`).then((result) => {
      console.log(result);
      return null;
    });
  }
}

export default new TrmsService();
