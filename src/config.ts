// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'qieq8psd9e'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/stage`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'test-quotes-2703.us.auth0.com',            // Auth0 domain
  clientId: 'omdcRUYaAUkcUG1MtPwk5v2yrabHY5fC',          // Auth0 client id
  callbackUrl: 'http://a1e35dd0b168841ec857ded820a677b6-1911967983.us-east-1.elb.amazonaws.com:8080/callback'
}
