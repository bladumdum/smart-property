const BASE_URL = "http://127.0.0.1:5000";

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

  console.log(result);
}
