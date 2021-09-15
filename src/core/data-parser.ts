import fetch from "node-fetch";

import { CoffeeShop } from "./coffee-shop";
import { Location } from "./location";

import { isLatitude, isLongitude } from "../utils/validators";

import { InvalidDataError } from "../errors/invalid-data-error";
import { InvalidGeolocationError } from "../errors/invalid-geolocation-error";

interface ResultItem {
  shop: CoffeeShop;
  distance: number;
}

export class DataParser {
  constructor(public url: string) {}

  public async process(location: Location): Promise<ResultItem[]> {
    const data = await fetch(this.url).then((result) => result.text());
    const lines: string[] = data.split("\n");

    const results: ResultItem[] = [];

    // O(n) complexity
    lines.forEach((line) => {
      const coffeeShop = this.extractData(line);
      const distance = coffeeShop.calculateDistance(location);

      if (results.length < 3) {
        results.push({ shop: coffeeShop, distance });
      } else {
        const found = results.findIndex((result) => result.distance > distance);
        if (found !== -1) {
          results[found] = { shop: coffeeShop, distance };
        }
      }
      results.sort((a, b) => b.distance - a.distance);
    });

    results.sort((a, b) => a.distance - b.distance);

    return results;
  }

  private extractData(line: string): CoffeeShop {
    const dataRegex = new RegExp(
      /^\s*(.*?)\s*,\s*(-?\d+\.\d+)\s*,(-?\d+\.\d+)\s*$/
    );
    const matches = line.match(dataRegex);

    if (!matches) {
      throw new InvalidDataError(line);
    }

    const latitude = Number.parseFloat(matches[2]);

    if (!isLatitude(latitude)) {
      throw new InvalidGeolocationError(line, "latitude");
    }

    const longitude = Number.parseFloat(matches[3]);

    if (!isLongitude(longitude)) {
      throw new InvalidGeolocationError(line, "longitude");
    }

    return new CoffeeShop(matches[1], new Location(latitude, longitude));
  }
}
