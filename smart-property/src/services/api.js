const BASE_URL = import.meta.env.VITE_API_URL;

export async function predictionHouse(data) {
  const config = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${BASE_URL}/prediction/predict`, config);

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.messages);
  }

  return result.prediction;
}
