import { Post } from '@/features';
import { getData } from '@/services/get-data';
import { useState, useEffect } from 'react';

export const useGetData = (url: string) => {
  const [data, setData] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fethData = async () => {
    try {
      const response = await getData(url);
      setData(response);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError('Error fetching data');
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fethData();
  }, [url]);

  return { data, isLoading, error };
};
