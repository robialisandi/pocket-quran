/* eslint-disable react/no-unescaped-entities */

import getConfig from 'next/config'

export default function Footer() {
  const { publicRuntimeConfig } = getConfig()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-center p-4 text-gray-400">
      <h6>-</h6>
      <small>
        Ngaaaji menggunakan sumber data dari{' '}
        <a
          href="https://github.com/rioastamal/quran-json"
          target="_blank"
          className="text-[#2F6742]"
        >
          Quran Json
        </a>{' '}
        oleh Rio Astamal untuk sumber data ayat-ayat Al Qur'an.{' '}
        <a
          href="https://www.doaharianislami.com/2017/06/kumpulan-doa-sehari-hari-lengkap-dalam-bahasa-arab-latin-dan-artinya.html"
          target="_blank"
          className="text-[#2F6742]"
        >
          Doa Harian Islami
        </a>{' '}
        untuk data doa-doa harian dan{' '}
        <a
          href="https://islam.nu.or.id/syariah/susunan-bacaan-tahlil-doa-arwah-lengkap-dan-terjemahannya-drr3t"
          target="_blank"
          className="text-[#2F6742]"
        >
          islam.nu.or.id
        </a>{' '}
        untuk bacaan tahlil, wirid dan{' '}
        <a
          href="https://islam.nu.or.id/ubudiyah/99-asmaul-husna-dan-artinya-1T8jl"
          target="_blank"
          className="text-[#2F6742]"
        >
          Asmaul Husna
        </a>
      </small>
      <p className="text-sm mt-5">
        Versi Aplikasi: {publicRuntimeConfig?.version}
      </p>
      <small>Copyright © 2023 - {currentYear}</small>
    </footer>
  )
}
