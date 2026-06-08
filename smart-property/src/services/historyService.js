const BASE_URL = "http://127.0.0.1:5000";

export async function historyService() {
  const response = await fetch(`${BASE_URL}/predict`);

  const result = await response.json();

  if (!response.success) {
    throw new Error(result.messages);
  }

  return result;
}
