import { InvalidArguments } from "../errors/invalid-arguments-error";
import { isLatitude, isLongitude, isValidUrl } from "../utils/validators";

interface Arguments {
  latitude: number;
  longitude: number;
  url: string;
}

export class ArgumentsReader {
  constructor() {}

  public process(): Arguments {
    let [, , latitudeArg, longitudeArg, urlArg] = process.argv;

    if (!latitudeArg) {
      throw new InvalidArguments("latitude");
    }

    const latitude = Number.parseFloat(latitudeArg);

    if (!isLatitude(latitude)) {
      throw new InvalidArguments("latitude");
    }

    if (!longitudeArg) {
      throw new InvalidArguments("longitude");
    }

    const longitude = Number.parseFloat(longitudeArg);

    if (!isLongitude(longitude)) {
      throw new InvalidArguments("longitude");
    }

    if (!urlArg || !isValidUrl(urlArg)) {
      throw new InvalidArguments("url");
    }

    return { latitude, longitude, url: urlArg };
  }
}
