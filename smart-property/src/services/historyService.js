const BASE_URL = "http://127.0.0.1:5000";

export async function historyService() {
  const response = await fetch(`${BASE_URL}/history`);

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message);
  }

  return result.history;
}

export async function deletePrediction(id) {
  const response = await fetch(`${BASE_URL}/history/${id}`, {
    method: "DELETE",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}
