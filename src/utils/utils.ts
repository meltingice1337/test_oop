import { Location } from "../core/location";

export const degreesToRadians = (degrees: number): number =>
  degrees * (Math.PI / 180);

/**
 * THIS IS THE CORRECT CALCULATION BUT AFTER THIS I SAW THAT YOU ARE CONSIDERING A PLANE
 */
export const calculateHaversine = (source: Location, target: Location) => {
  const EARTH_RADIUS = 6371;
  const [sourceLat, sourceLong] = source.getRadians();
  const [targetLat, targetLong] = target.getRadians();

  const deltaLat = targetLat - sourceLat;
  const deltaLong = targetLong - sourceLong;

  const haversineParam =
    Math.pow(Math.sin(deltaLat / 2), 2) +
    Math.cos(sourceLat) *
      Math.cos(targetLat) *
      Math.pow(Math.sin(deltaLong / 2), 2);

  return 2 * EARTH_RADIUS * Math.asin(Math.sqrt(haversineParam));
};

export const calculateDistance = (source: Location, target: Location) => {
  return Math.sqrt(
    Math.pow(target.longitude - source.longitude, 2) +
      Math.pow(target.latitude - source.latitude, 2)
  );
};

export const roundNumber = (number: number, decimals = 4): number => {
  return Math.round((number + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
