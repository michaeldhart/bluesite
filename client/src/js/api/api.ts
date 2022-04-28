import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:7000',
});

export const Api = {
  post: async <J, K>(url: string, body: J): Promise<K | undefined> => {
    try {
      const response = await client.post(url, {
        data: body,
      });

      if (response.status === 200) {
        return response.data;
      } else {
        console.log(response.status);
      }
    } catch (error: any) {
      console.log(error.toJSON());
    }
  },
  get: async <K>(url: string): Promise<K | undefined> => {
    try {
      const response = await client.get(url);

      if (response.status === 200) {
        return response.data;
      } else {
        alert(response.status);
      }
    } catch (error: any) {
      alert(error.toJSON());
    }
  },
  put: async <J, K>(url: string, body: J): Promise<K | undefined> => {
    try {
      const response = await client.put(url, {
        data: body,
      });

      if (response.status === 200) {
        return response.data;
      } else {
        alert(response.status);
      }
    } catch (error: any) {
      alert(error.toJSON());
    }
  },
  delete: async (url: string): Promise<undefined> => {
    try {
      const response = await client.delete(url);

      if (response.status === 200) {
        return response.data;
      } else {
        alert(response.status);
      }
    } catch (error: any) {
      alert(error.toJSON());
    }
  },
};
