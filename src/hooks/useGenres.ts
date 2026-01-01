import genres from "@/data/genres"
import apiClient from "@/services/api-client"
import { useQuery } from "@tanstack/react-query"
import type { fetchResponse } from "../services/api-client"


export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenres= () => useQuery({
  queryKey: ["genres"],
  queryFn: () => apiClient
     .get<fetchResponse<Genre>>("/genres")
     .then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, // This is 24 hours
  initialData: {count: genres.length, results: genres}
})


export default useGenres;