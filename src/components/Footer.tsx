/* eslint-disable react/no-unescaped-entities */

import getConfig from 'next/config'

export default function Footer() {
  const { publicRuntimeConfig } = getConfig()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-center p-4 text-gray-400">
      <h6>-</h6>
      <small>
        Ngaaaji menggunakan sumber data Al-Qur'an dari{' '}
        <a href="https://github.com/rioastamal/quran-json" target="_blank" className="text-[#2F6742]">
          Quran Json
        </a>{' '}
        yang disusun oleh Rio Astamal. Untuk doa-doa harian, kami mengandalkan{' '}
        <a
          href="https://www.doaharianislami.com/2017/06/kumpulan-doa-sehari-hari-lengkap-dalam-bahasa-arab-latin-dan-artinya.html"
          target="_blank"
          className="text-[#2F6742]"
        >
          Doa Harian Islami
        </a>
        , sementara bacaan tahlil, wirid, dan Asmaul Husna kami peroleh dari{' '}
        <a
          href="https://islam.nu.or.id/syariah/susunan-bacaan-tahlil-doa-arwah-lengkap-dan-terjemahannya-drr3t"
          target="_blank"
          className="text-[#2F6742]"
        >
          islam.nu.or.id
        </a>
        . Dengan inspirasi dari{' '}
        <a href="https://github.com/mazipan" target="_blank" className="text-[#2F6742]">
          Maz Ipan
        </a>
        , kami mengucapkan terima kasih kepada semua pihak yang terlibat, baik langsung maupun tidak langsung.
      </small>
      <p className="text-sm mt-5">Versi Aplikasi: {publicRuntimeConfig?.version}</p>
      <small>Copyright © 2023 - {currentYear}</small>
    </footer>
  )
}
