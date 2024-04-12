import api from "./api";
import qs from "qs";

const route = "/match";

export const matchList = ({ params, token }) => {
  return api.get(route + "/list", {
    params,
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "comma" }),
    headers: { Authorization: "Bearer " + token },
  });
};

export const matchGet = ({ params, token }) => {
  const { matchId } = params;
  return api.get(route + `/get/${matchId}`, {
    headers: { Authorization: "Bearer " + token },
  });
};

export const matchGetGold = ({ params, token }) => {
  const { matchId } = params;
  return api.get(route + `/get/${matchId}/gold`, {
    headers: { Authorization: "Bearer " + token },
  });
};

export const matchGetDamage = ({ params, token }) => {
  const { matchId } = params;
  return api.get(route + `/get/${matchId}/damage`, {
    headers: { Authorization: "Bearer " + token },
  });
};

export const matchAdd = ({ params, token }) => {
  return api.post(route + "/add", params, {
    headers: { Authorization: "Bearer " + token },
  });
};

export const matchDelete = ({ params, token }) => {
  return api.post(route + "/delete", params, {
    headers: { Authorization: "Bearer " + token },
  });
};
