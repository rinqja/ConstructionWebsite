import axios from "axios";
const host = window.location.hostname;
export const getHost = () => {
  switch (host) {
    case "localhost":
    case "127.0.0.1":
      return "https://api.lubber.rejoicehub.com/api/v1";
    default:
      return "https://api.lubber.rejoicehub.com/api/v1";
  }
};
export const BaseURL = getHost();
export const BaseURL1 =
  "https://serene-plains-85605-f9d9e07651ae.herokuapp.com"; //Just change the url to the live server after you live the server on heroku
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
const logoutHandler = () => {
  localStorage.clear();
};
const defaultHeaders = {
  isAuth: true,
  AdditionalParams: {},
  isJsonRequest: true,
  api_key: true,
};
const handleError = (error) => {
  if (
    error &&
    error.hasOwnProperty("response") &&
    error.response &&
    error.response.hasOwnProperty("data") &&
    error.response.data &&
    error.response.data.hasOwnProperty("error") &&
    error.response.data.error
  ) {
    return error.response.data.error;
  } else {
    return error;
  }
};
export const getHttpOptions = (options = defaultHeaders) => {
  let headers = {};
  if (options.hasOwnProperty("isAuth") && options.isAuth) {
    // if (getCookie("token")) {
    //   headers["Authorization"] = `Bearer ${getCookie("token")}`;
    // } else {
    //   headers["Authorization"] = `Bearer ${params.token}`;
    // }
    headers["Authorization"] = `Bearer ${params.token}`;
  }
  if (options.hasOwnProperty("isJsonRequest") && options.isJsonRequest) {
    headers["Content-Type"] = "application/json";
  }
  if (options.hasOwnProperty("AdditionalParams") && options.AdditionalParams) {
    headers = { ...headers, ...options.AdditionalParams };
  }
  headers["ngrok-skip-browser-warning"] = "true";
  return { headers };
};
export const getHeaderData = (AdditionalHeader) => {
  let header = {
    ...getHttpOptions(),
  };
  if (AdditionalHeader) {
    header = {
      headers: {
        ...header.headers,
        ...AdditionalHeader.headers,
      },
    };
  }
  return header;
};
export const formDataHeader = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export const ApiPostNoAuth = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        BaseURL + type,
        userData,
        getHttpOptions({ ...defaultHeaders, isAuth: false })
      )
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};
export const ApiPutNoAuth = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(
        BaseURL + type,
        userData,
        getHttpOptions({ ...defaultHeaders, isAuth: false })
      )
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};
export const ApiGetNoAuth = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseURL + type, getHttpOptions({ ...defaultHeaders, isAuth: false }))
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};
export const ApiGet = (type, AdditionalHeader) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseURL + type, getHeaderData(AdditionalHeader))
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          logoutHandler();
        }
        reject(handleError(error));
      });
  });
};
export const ApiGetNoPid = (type, AdditionalHeader) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseURL + type, getHeaderData(AdditionalHeader))
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};
export const ApiPost = (type, userData, AdditionalHeader) => {
  console.log("type", type, userData, AdditionalHeader);
  return new Promise((resolve, reject) => {
    axios
      .post(BaseURL + type, userData, getHeaderData(AdditionalHeader))
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          logoutHandler();
        }
        reject(handleError(error));
      });
  });
};

export const ApiPost1 = (type, userData, AdditionalHeader) => {
  console.log("type", type, userData, AdditionalHeader);
  return new Promise((resolve, reject) => {
    axios
      .post(BaseURL1 + type, userData, getHeaderData(AdditionalHeader))
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          logoutHandler();
        }
        reject(handleError(error));
      });
  });
};

export const ApiPut = (type, userData, AdditionalHeader) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseURL + type, userData, getHeaderData(AdditionalHeader))
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          logoutHandler();
        }
        reject(handleError(error));
      });
  });
};
export const ApiDelete = (type, AdditionalHeader) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BaseURL + type, getHeaderData(AdditionalHeader))
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          logoutHandler();
        }
        reject(handleError(error));
      });
  });
};
