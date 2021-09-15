import { Location } from "../core/location";

import { calculateDistance, roundNumber } from "../utils/utils";

export class CoffeeShop {
  constructor(public name: string, public location: Location) {}

  /** 
   * REMOVED HAVERSINE CALCULATION BECAUSE THE EARTH IS FLAT
   * 
   * Calculates the distance between this coffee shop and
   * the location given as argument and returns the distance
   * in KMs
   * 
   * /s
   */
  public calculateDistance(target: Location): number {
    return roundNumber(calculateDistance(this.location, target));
  }
}
