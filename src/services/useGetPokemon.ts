import { useQuery } from "@tanstack/vue-query"
import { mainApi } from "./mainApi"
import type { IResponse, Pokemon } from "@/interfaces/pokemon.interface"

export const useGetPokemon = () => {
  return useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const { data } = await mainApi.get<IResponse<Pokemon>>('/pokemon')
      return { data }
    }
  })
}
