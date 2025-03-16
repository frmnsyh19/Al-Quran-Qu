import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type AudioKeys = "01" | "02" | "03" | "04" | "05";

type DataSurahType = {
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: Record<AudioKeys, string>;
};

type ayatType = {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: Record<AudioKeys, string>;
};

export const useGetDetailSurah = (nomer: number) => {
  return useQuery({
    queryKey: ["surah", nomer], // ✅ Cache query berdasarkan nomor surah
    queryFn: async () => {
      const response = await axios.get("/api/detailsurah", {
        params: { nomor: nomer },
      });

      const data: DataSurahType = response.data.data; // Pastikan `data` adalah objek, bukan array

      const ayat = response.data.data.ayat;

      const newAyat = ayat.map((items: ayatType) => {
        return {
          nomorAyat: items.nomorAyat,
          teksArab: items.teksArab,
          teksLatin: items.teksLatin,
          teksIndonesia: items.teksIndonesia,
          audio: items.audio["05"],
        };
      });

      return {
        arti: data.arti,
        nama: data.nama,
        namaLatin: data.namaLatin,
        jumlahAyat: data.jumlahAyat,
        qori: "Misyari-Rasyid-Al-Afasi",
        audio: data.audioFull["05"], // ✅ Ambil audio dari qori yang dipilih
        tempatTurun: data.tempatTurun,
        ayat: newAyat,
      };
    },
    refetchOnWindowFocus: false,
  });
};
