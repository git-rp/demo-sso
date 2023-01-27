export const environment = {
  production: false,

  sso_api_username: "60gdbhb26icdihu7i9ho0ma9ol",
  sso_api_pwd: "12950ofnfvf27ed2im5u5hak97u2vhelrhbbefn7mrn74folvcob",

  loginURL:
    " https://cog-google-test.auth.us-east-2.amazoncognito.com/login?" +
    "client_id=60gdbhb26icdihu7i9ho0ma9ol&response_type=code&scope=openid+profile&" +
    "redirect_uri=http://localhost:4200/callback",

  redirectURL: "http://localhost:4200/callback",

  cognitoTokenURL:
    " https://cog-google-test.auth.us-east-2.amazoncognito.com/oauth2/token",

  logout:
    " https://cog-google-test.auth.us-east-2.amazoncognito.com/logout?" +
    "client_id=60gdbhb26icdihu7i9ho0ma9ol&" +
    "logout_uri=http://localhost:4200/home",
};

