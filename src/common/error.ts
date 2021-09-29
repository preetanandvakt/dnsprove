export enum DnsproveStatusCode {
  IDNS_QUERY_ERROR_GENERAL = 0,
  IDNS_QUERY_RESPONSE_TRANSFORMER_MISSING = 1,
}
export class CodedError extends Error {
  code: number;

  codeString: string;

  constructor(message: string, code: DnsproveStatusCode, codeString: string) {
    super(message);
    this.code = code;
    this.codeString = codeString;
  }
}
