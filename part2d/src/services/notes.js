const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  const data = fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
  return data;
};

const create = (newObject) => {
  const response = fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newObject),
  }).then((resp) => resp.json());

  return response;
};

const update = (id, newObject) => {
  const response = fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newObject),
  }).then((resp) => resp.json());
  return response;
};

export default {
  getAll,
  create,
  update,
};
