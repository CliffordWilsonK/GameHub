import platforms from "@/data/platforms";
import apiClient from "@/services/api-client";
import {useQuery} from "@tanstack/react-query"
import {type Platform } from "./useGames";

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient
      .get<Platform[]>("/platforms/lists/parents")
      .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms
})



export default usePlatforms;