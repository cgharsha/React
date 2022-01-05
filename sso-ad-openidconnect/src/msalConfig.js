export const msalConfig = {
  auth: {
    clientId: "fa75bcb5-389f-45e6-ad0d-4bb5fa3788d0",
    authority:
      "https://login.microsoftonline.com/051aeb51-408b-403b-b95c-4ff3b303a08a", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "https://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

// Client Secret - wSZ7Q~ijJhdgcjX3BeWWLWQX~nt1DqCJQAU-3

// ip-dev-instance

// https://login.microsoftonline.com/051aeb51-408b-403b-b95c-4ff3b303a08a

// https://login.microsoftonline.com/051aeb51-408b-403b-b95c-4ff3b303a08a/oauth2/v2.0

// https://login.microsoftonline.com/051aeb51-408b-403b-b95c-4ff3b303a08a/token

// fa75bcb5-389f-45e6-ad0d-4bb5fa3788d0

// wSZ7Q~ijJhdgcjX3BeWWLWQX~nt1DqCJQAU-3

// https://sts.windows.net/9188040d-6c67-4c5b-b112-36a304b66dad/

export const loginRequest = {
  scopes: ["openid"],
};

export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me",
};
