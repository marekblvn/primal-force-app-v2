import api from "./api";

const route = "/chart";

export const gold = ({ params, token }) => {
  return api.get(route + "/gold", {
    params,
    headers: { Authorization: "Bearer " + token },
  });
};

export const damage = ({ params, token }) => {
  return api.get(route + "/damage", {
    params,
    headers: { Authorization: "Bearer " + token },
  });
};
