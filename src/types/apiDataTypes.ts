export interface Sender {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}

export interface Chat {
  id: string;
  message: string;
  sender: Sender;
  time: string;
}