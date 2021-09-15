import { degreesToRadians } from "../utils/utils";

export class Location {
  constructor(public latitude: number, public longitude: number) {}

  public getRadians(): number[] {
    return [degreesToRadians(this.latitude), degreesToRadians(this.longitude)];
  }
}
