import { UserResponse } from "../../../types/UserResponse";
import { WindResponse } from "../../../types/WindResponse";

export interface GameRecordInputValues {
  jyanshi: UserResponse | null;
  wind: WindResponse | null;
  score: number;
  isFirstOya: boolean;
}
