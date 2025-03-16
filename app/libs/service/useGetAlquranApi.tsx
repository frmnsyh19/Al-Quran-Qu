import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAlquranApi = () => {
  return useQuery({
    queryKey: ["alquranKey"],
    queryFn: async () => {
      const response = await axios.get("/api/alquran");
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
};
