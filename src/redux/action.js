import http from "../helper/http";

// ACCIONES PARA LA AUTENTICACION
export const authentication_action = (boolean) => {
  localStorage.setItem("auth", "true");
  return {
    type: "user-authentication",
    payload: boolean,
  };
};

export const axios_auth_action = (url, body) => {
  return async (dispatch) => {
    const resultado = await http(url, "post", body)
      .then(() => {
        return true;
      })
      .catch(() => false);
    return dispatch(authentication_action(resultado));
  };
};

//ACCIONES  PARA OBTENER DATOS DE LA API SUPERHERO

const request_sent_action = (boolean) => {
  return {
    type: "request_sent",
    payload: boolean,
  };
};

const request_success_action = (boolean, body) => {
  return {
    type: "request_success",
    payload: boolean,
    data: body,
  };
};

const request_error_action = (boolean) => {
  return {
    type: "request_error",
    payload: boolean,
  };
};

export const axios_hero_action = (url) => {
  return (dispatch) => {
    dispatch(request_sent_action(true));
    http(url, "get").then((res) => {
      if (res.data.response == "error") {
        dispatch(request_error_action(true));
      } else {
        dispatch(request_success_action(true, res.data.results));
      }
    });
  };
};
