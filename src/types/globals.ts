import { ServiceImgs } from "@/hooks/useServices";

export type Language = "es" | "en";

export type Category = {
  id: string;
  key: keyof ServiceImgs;
};

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

export type TransactionApiReponse = {
  id: string;
  user_id: string;
  category_id: string;
  budget_id: string;
  category: Category;
  name: string;
  transaction_date: string;
  amount: number;
}[];
