export type Language = "es" | "en";

export type Pot = {
  id: string;
  user_id: number;
  name: string;
  target: number;
  target_value: number;
  current_value: number;
  theme: string;
};

export type PotApiResponse = {
  total_saved: number;
  pots: Pot[];
};
