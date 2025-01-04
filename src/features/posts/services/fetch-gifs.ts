import { config } from '@/config/env-config';
import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch(config.VITE_GIPHY_API_KEY);

export const fetchGifs = async (
  offset: number,
  searchText: string,
): Promise<GifsResult> => {
  if (searchText.trim() === '') {
    return gf.trending({ offset, limit: 10 });
  }
  return gf.search(searchText, { offset, limit: 10 });
};
