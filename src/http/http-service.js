import { getToken } from "./token-interceptor";

const structureQueryParams = params => {
  let queryStrings = "?";
  const keys = Object.keys(params);
  keys.forEach((key, index) => {
    queryStrings += key + "=" + params[key];
    if (params[keys[index + 1]]) {
      queryStrings += "&";
    }
  });
  return queryStrings;
};

export const handleErrorIfAvailable = httpResponse => {
  switch (httpResponse.status) {
    case 401: {
      // Token expired
      localStorage.clear();
      window.location.reload();
      break;
    }
    default: {

    }
  }
}

export const makeGetRequest = async (url, attachToken = false, params = null) => {

  let queryString = "";
  if (params) {
    queryString = structureQueryParams(params);
  }
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (attachToken) {
    try {
      const authToken = await getToken();
      if (authToken) {
        console.log(authToken);
        headers["x-access-token"] = authToken;
      }
    } catch (e) {
      console.log(e);
    }
  }

  try {
    let fetRes = await fetch(url + queryString, {
      method: "GET",
      headers: headers
    });
    handleErrorIfAvailable(fetRes);
    return await fetRes.json();
  } catch (e) {
    return e;
  }
};

export const makePostRequest = async (url, attachToken = false, params = {}) => {

  let headers = {
    "Content-Type": "application/json"
  };
  if (attachToken) {
    try {
      const authToken = await getToken();
      if (authToken) {
        headers["x-access-token"] = authToken;
      }
    } catch (e) {
      console.log("Error fetching auth token: ", e);
    }
  }
  try {
    let fetRes = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(params)
    });
    handleErrorIfAvailable(fetRes);
    return await fetRes.json();
  } catch (e) {
    return e;
  }

};
export const makePutRequest = async (url, attachToken = false, params = {}) => {

  let headers = {
    "Content-Type": "application/json"
  };
  if (attachToken) {
    try {
      const authToken = await getToken();
      if (authToken) {
        headers["x-access-token"] = authToken;
      }
    } catch (e) {
      console.log("Error fetching auth token: ", e);
    }
  }

  try {
    let fetRes = await fetch(url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(params)
    });
    handleErrorIfAvailable(fetRes);
    return await fetRes.json();
  } catch (e) {
    return e;
  }

};
export const makeDeleteRequest = async (url, attachToken = false, params = {}) => {

  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (attachToken) {
    try {
      const authToken = await getToken();
      if (authToken) {
        headers["x-access-token"] = authToken;
      }
    } catch (e) {
      console.log("Error fetching auth token: ", e);
    }
  }

  try {
    let fetRes = await fetch(url, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify(params)
    });
    handleErrorIfAvailable(fetRes);
    return await fetRes.json();
  } catch (e) {
    return e;
  }
};

