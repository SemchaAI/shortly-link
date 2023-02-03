const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

export const ShortlyLink = async (link) => {
  const response = await fetch(`${BASE_URL}${link}`);
  return await response.json();
};
