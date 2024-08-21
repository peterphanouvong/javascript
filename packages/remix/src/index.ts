import { generateAuthUrl } from "@kinde/core";
import { IssuerRouteTypes, Scopes } from "../../types/dist";

export const test = () => console.log("Hello World!");

export const login = () => {
  console.log("login");
  const url = generateAuthUrl("http://localhost:3000", IssuerRouteTypes.login, {
    callbackURL: "http://localhost:3000",
    clientId: "123",
    isCreateOrg: "false",
    lang: "fr",
    loginHint: "test",
    orgCode: "test",
    orgName: "test",
    prompt: "login",
    redirectURL: "http://localhost:3000",
    responseType: "code",
    scope: [Scopes.openid, Scopes.profile],
    state: "test",
  });

  return url;
};
