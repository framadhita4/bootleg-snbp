import Image from "next/image"
import { FormEventHandler } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

export default function Home() {
  const router = useRouter()

  const InputElm = ({id, placeholder, label}:{id: string, placeholder: string, label: string}) => {
    return <>
    { label !== "" && <p className="mb-2">{label}</p> }
    <input required type="text" id={id} name={id} className="h-9 rounded-md w-full bg-neutral-500 p-2 font-bold text-white placeholder:text-neutral-400 mb-2" placeholder={placeholder}/>
    </>
  }

  const handleSubmit:FormEventHandler = async (event) => {
    event.preventDefault();
    const form = document.querySelectorAll("input")
    const data = {
      nama : `${form[0].value}`,
      tanggal: `${form[1].value}/${form[2].value}/${form[3].value}`,
      sekolah: `${form[4].value}`,
      ptn: `${form[5].value}`,
      prodi: `${form[6].value}`,
      kota: `${form[7].value}`,
      prov: `${form[8].value}`
    };
    router.push({pathname: "/accepted" , query: data});
  }

  return (
    <>
      <Head>
        <title>Bootleg SNBP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-neutral-900 flex flex-col content-center justify-center p-4'>
        <div className="rounded w-full md:w-2/4 m-auto bg-neutral-700 p-5 md:p-8">
          <Image className="w-20 md:w-48" src={"/snbp.png"} width={200} height={200} alt={"tes"}></Image>
          <h1 className="font-bold mt-4 text-3xl text-white mb-6">BOOTLEG SNBP 2023</h1>
          <form onSubmit={handleSubmit} className="font-bold text-[#88CCF0]">
            <InputElm id="nama" placeholder="Nama peserta" label="Nama Peserta"/>
            <p>Tanggal Lahir</p>
            <div className="flex mt-2 text-gray-400 gap-1 items-baseline">
              <InputElm id="tanggal" placeholder="Tanggal" label=""/>/
              <InputElm id="bulan" placeholder="Bulan" label=""/>/
              <InputElm id="tahun" placeholder="Tahun" label=""/>
            </div>
            <InputElm id="sekolah" placeholder="Asal sekolah menengah" label="Asal Sekolah"/>
            <InputElm id="kampus" placeholder="Nama perguruan tinggi negeri" label="Nama PTN"/>
            <InputElm id="prodi" placeholder="Nama prodi" label="Nama Prodi"/>
            <InputElm id="kota" placeholder="Kabupaten/kota" label="Nama Kabupaten / Kota"/>
            <InputElm id="Provinsi" placeholder="Nama provinsi" label="Nama Provinsi"/>

            <button className="mt-6 bg-[#008ACF] font-bold text-white p-2 px-4 rounded-full" type="submit">LIHAT HASIL SELEKSI</button>
          </form>
          <p className="text-center mt-6 text-neutral-800">@framadhita_</p>
        </div>
      </div>
    </>
  )
}
