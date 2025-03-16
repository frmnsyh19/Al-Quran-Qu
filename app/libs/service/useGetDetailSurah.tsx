import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetDetailSurah = (nomer: number) => {
  return useQuery({
    queryKey: ["surah"],
    queryFn: async () => {
      const response = await axios.get("/api/detailsurah", {
        params: {
          nomor: nomer,
        },
      });

      return response.data;
    },
  });
};
