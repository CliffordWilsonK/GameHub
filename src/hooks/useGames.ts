import type { GameQuery } from "@/App";
import {type fetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import {type Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}



const useGames = (gameQuery: GameQuery) => useQuery({
  queryKey: ["games", gameQuery],
  queryFn: () => apiClient
    .get<fetchResponse<Game>>("/games", {params: 
      {genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText},})
    .then(res => res.data)
})
  
  


export default useGames;