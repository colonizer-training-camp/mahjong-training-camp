import { I18nResponse } from "./I18nResponse";
import { WindResponse } from "./WindResponse";

export interface GameTypeResponse {
  type: string;
  players: number;
  totalScore: number;
  scoreType: "score" | "chips";
  wind: WindResponse;
  displayName: I18nResponse;
}
