import { EXCEPTION_CODE } from '../enums/exceptionCode';

export class HttpException extends Error {
  constructor(
    public readonly message: string,
    public readonly code: EXCEPTION_CODE,
  ) {
    super(message);
  }
}
