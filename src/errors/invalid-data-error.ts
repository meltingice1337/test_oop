export class InvalidDataError extends Error {
  constructor(line: string) {
    super(`Invalid data entry: \`${line}\``);
  }
}
