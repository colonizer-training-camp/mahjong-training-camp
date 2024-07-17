export interface UserResponse {
  userId: number;
  loginId: string;
  displayName: string;
  isHost: boolean;
  lastGameAt: string | null;
}
