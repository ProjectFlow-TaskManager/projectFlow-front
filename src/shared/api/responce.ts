import { BASE_URL } from '@/shared/consts/api';

export const apiRequest = async <T>(endpoint: string, config: any) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...config,
    });

    const parseResponse = await extractResponseBody<T>(res);

    if (res.ok) {
      return parseResponse as T;
    }
  } catch (err) {
    console.log(err);
  }
};

const extractResponseBody = async <T>(response: Response): Promise<T | null> => {
  try {
    return (await response.json()) as T;
  } catch (err) {
    return null;
  }
};
