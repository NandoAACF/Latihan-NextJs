import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            console.log("Udah 2 detik, balik ke home page");
            // Mengarahkan ke halaman utama
            router.push('/')
        }, 2000)
    }, [])
    return (
    <div>
        <h1 className='title-not-found'>Halaman yang Anda cari tidak ada. Hehehe :)</h1>
    </div>
  )
}
