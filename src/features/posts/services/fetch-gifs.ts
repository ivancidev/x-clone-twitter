import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

export const fetchGifs = async (
  offset: number,
  searchText: string,
): Promise<GifsResult> => {
  if (searchText.trim() === '') {
    return gf.trending({ offset, limit: 10 });
  }
  return gf.search(searchText, { offset, limit: 10 });
};
