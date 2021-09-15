export class InvalidArguments extends Error {
  constructor(argument: "latitude" | "longitude" | "url") {
    super(`Invalid ${argument} argument`);
  }
}
