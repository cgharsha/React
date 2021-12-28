export const msalConfig = {
  auth: {
    clientId: "51fecc0e-edb0-4264-990b-e22c49eba5f4",
    authority:
      "https://login.microsoftonline.com/8565ae09-39a4-44e6-bb1f-7e4977ca86f9", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "https://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["openid"],
};

export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me",
};
