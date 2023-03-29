import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

type Data = {
  nama: string;
  tanggal: string;
  sekolah: string;
  ptn: string;
  prodi: string;
  kota: string;
  prov: string;
}
  
export default function Page() {
  const router = useRouter();
  const data = router.query as Data;
  const capitalizeEachWord = (text:string) => {
    return (text || "").replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

  useEffect(() => {
    if (router.isReady) return;
  },[router.isReady])
  
  return <>
    <Head>
      <title>Bootleg SNBP</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='bg-neutral-900 flex flex-col content-center justify-center'>
      <div className="bg-black bg-gradient-to-r from-[#01396A] to-[#166BAB] p-5">
        <Image className="w-40 mb-4 md:w-48" src={"/snbp.png"} width={200} height={200} alt={"tes"}></Image>
        <h1 className="leading-5 font-bold text-white text-xl">SELAMAT! ANDA DINYATAKAN LULUS SELEKSI SNBP 2023</h1>
      </div>
      <div className="p-5 font-bold text-[#88CCF0]">
        <Image className="w-24 mb-4 md:w-48" src={"/qr.png"} width={200} height={200} alt={"tes"}></Image>
        <p className="text-[14px]">NISN 0049120937 - NOREG 421486749</p>
        <h1 className="text-white text-3xl mb-1">{data.nama}</h1>
        <div className="font-[500] text-md leading-[18px] text-[#b9b9b9] mb-4">
          <p>{data.prodi}</p>
          <p>{data.ptn}</p>
        </div>
        <p className="text-[14px] leading-4">Tanggal Lahir</p>
        <h1 className="text-white text-lg mb-4">{data.tanggal}</h1>
        <p className="text-[14px] leading-4">Asal Sekolah</p>
        <h1 className="text-white text-lg mb-4">{data.sekolah}</h1>
        <p className="text-[14px] leading-4">Kabupaten/Kota</p>
        <h1 className="text-white text-lg mb-4">{capitalizeEachWord(data.kota)}</h1>
        <p className="text-[14px] leading-4">Provinsi</p>
        <h1 className="text-white text-lg mb-4">Prov. {capitalizeEachWord(data.prov)}</h1>
        <div className="w-full bg-white p-2">
          <h1 className="text-neutral-600 leading-5">Silahkan lakukan pendaftaran ulang</h1>
          <p className="text-[12px] leading-[14px] text-neutral-400 mb-1">Informasi pendaftaran ulang di PTN/Politeknik Negeri dapat dilihat pada link berikut:</p>
          <a href="#" className="text-blue-500 text-sm">https://penerimaan.timmerah.ac.id/</a>
        </div>
      </div>
    </div>
  </>
}