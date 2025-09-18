export enum ApiCodeResponse {
  TEST = 'api.result.test',
  CREDENTIAL_DELETE_ERROR = 'api.security.credentials-delete.error',
  CREDENTIAL_DELETE_SUCCESS = 'api.security.credentials-delete.error',
  TOKEN_GEN_ERROR = 'api.security.token-gen.error',
  USER_ALREADY_EXIST = 'api.security.user-already-exist',
  SIGNUP_ERROR = 'api.security.signup.error',
  SIGNUP_SUCCESS = 'api.security.signup.success',
  TOKEN_EXPIRED = 'api.security.token-expired',
  USER_NOT_FOUND = 'api.security.user-not-found',
  NO_TOKEN_FOUNDED = 'api.security.no-token-founded'
}