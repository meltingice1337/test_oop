export class InvalidGeolocationError extends Error {
  constructor(line: string, type: "latitude" | "longitude") {
    super(`Invalid ${type} entry: \`${line}\``);
  }
}
