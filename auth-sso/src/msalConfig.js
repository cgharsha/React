export const msalConfig = {
  auth: {
    clientId: "bcf4adf6-b218-46c1-98a1-fd5791c12538",
    authority:
      "https://login.microsoftonline.com/051aeb51-408b-403b-b95c-4ff3b303a08a", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000/",
    postLogoutRedirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};

export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me",
};
