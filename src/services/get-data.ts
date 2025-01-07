export const getData = async (url: string) => {
  try {
    const response = await fetch(`${url}/publications`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};
