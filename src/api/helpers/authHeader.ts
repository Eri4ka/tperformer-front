export const authHeader = () => {
  const state = localStorage.getItem('token');
  const token = state ? JSON.parse(state) : undefined;

  if (token) {
    return { Authorization: `Token ${token}` };
  }

  return {};
};
