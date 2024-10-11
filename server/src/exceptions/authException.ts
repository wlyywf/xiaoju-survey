import { HttpException } from './httpException';
import { EXCEPTION_CODE } from '../enums/exceptionCode';
export class AuthenticationException extends HttpException {
  constructor(public readonly message: string) {
    super(message, EXCEPTION_CODE.AUTHENTICATION_FAILED);
  }
}
