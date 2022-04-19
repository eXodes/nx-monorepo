const base = process.env.API_URL;

export const api = async <T extends Record<string, unknown>>(
  resource = "",
  options?: RequestInit
) => {
  const url = `${base}/${resource}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data: T = await response.json();

  return data;
};
