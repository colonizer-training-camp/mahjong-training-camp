import { WindResponse } from "../types/WindResponse";

export const indexToWind = (index: number): WindResponse => {
  if (index === 0) return "EAST";
  if (index === 1) return "SOUTH";
  if (index === 2) return "WEST";
  if (index === 3) return "NORTH";
  throw new Error("Invalid wind index");
};

export const resolveWindIndex = (
  index: number,
  firstOya: number,
  players: number
) => {
  if (players === 4) {
    return (index + 4 - firstOya) % players;
  }
  if (players === 3) {
    return (index + 3 - firstOya) % players;
  }
  return index;
};

export const resolveWind = (index: number, firstOya: number, players: number) =>
  indexToWind(resolveWindIndex(index, firstOya, players));

export const WIND_KANJI: Record<WindResponse, string> = {
  EAST: "東",
  SOUTH: "南",
  WEST: "西",
  NORTH: "北",
};
