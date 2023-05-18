import axios from "axios";

const get = async (url) => {
  const response = await axios.get(url, {
    headers: { Accept: "application/json", "Accept-encoding": "identity" },
  });
  return response.data;
};

export default { get };
