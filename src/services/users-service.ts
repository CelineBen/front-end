import * as uuid from 'uuid/v4';

const USERNAME_ALREADY_EXISTS_REGEX = /@mynewknow.com$/;
const SECURED_PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const USERNAME_REQUIRED_ERROR_CODE = 1001;
const PASSWORD_REQUIRED_ERROR_CODE = 1002;
const USERNAME_ALREADY_EXISTS_ERROR_CODE = 1003;
const UNSECURED_PASSWORD_ERROR_CODE = 1004;

export default class UsersService {
  public static async create(args: { username: string, password: string }) {
    const {
      password,
      username,
    } = args;

    let errors : any[]= [];

    if(!username || username.length === 0) {
      errors = [
        ...errors,
        {
          errorCode: USERNAME_REQUIRED_ERROR_CODE,
          errorString: 'USERNAME_REQUIRED_ERROR_CODE',
          field: 'username',
        }
      ]
    }

    if(!password || password.length === 0) {
      errors = [
        ...errors,
        {
          errorCode: PASSWORD_REQUIRED_ERROR_CODE,
          errorString: 'PASSWORD_REQUIRED_ERROR_CODE',
          field: 'password',
        }
      ]
    }

    if(USERNAME_ALREADY_EXISTS_REGEX.exec(username)) {
      errors = [
        ...errors,
        {
          errorCode: USERNAME_ALREADY_EXISTS_ERROR_CODE,
          errorString: 'USERNAME_ALREADY_EXISTS_ERROR_CODE',
          field: 'username',
        }
      ]
    }

    if(password && !SECURED_PASSWORD_REGEX.exec(password)) {
      errors = [
        ...errors,
        {
          errorCode: UNSECURED_PASSWORD_ERROR_CODE,
          errorString: 'UNSECURED_PASSWORD_ERROR_CODE',
          field: 'password',
        }
      ]
    }

    if(errors.length > 0) {
      return {
        errors
      }
    }

    return {
      users: {
        authenticationToken: uuid(),
        username,
      }
    }
  }
}
