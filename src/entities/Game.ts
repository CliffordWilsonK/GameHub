import type Platform from "@/entities/Platform";
import type Genre from "./Genre";
import type Publisher from "./Publishers";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  slug: string;
  description_raw: string;
}
