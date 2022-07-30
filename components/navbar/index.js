/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import style from './index.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../../img/Logo.png';

const navbar = () => {
  const router = useRouter()
  const [menu,setMenu] = useState(false);
  const Elemento = React.useRef();
  const [topElement,setTopElement] = React.useState();;
  
  React.useEffect(()=>{
    setMenu(false);
    window.addEventListener('scroll',(e)=>{
      if(window.scrollY > 421.1111145019531) setMenu(false);
    })
  },[topElement,router])

  return (
    <header className={style.header} ref={Elemento}>
        <Image
        src={Logo}
        alt="Logo coderfaster"
        width={150}
        height={100}
        />
        <div onClick={()=>{setMenu(!menu)}} className={menu ? `${style.ContainerbuttonMenu + " "  + style.ativo}` : `${style.ContainerbuttonMenu}`}>
          <button></button>
          <button></button> 
          <button></button> 
        </div>
        <nav className={menu ? `${style.menuMobile + " "  + style.ativo}` : `${style.menuMobile}`}>
          <ul>
            <li><Link href="/"><a>INICIO</a></Link></li>
            <li><Link href="/artigos"><a>ARTIGOS</a></Link></li>
            <li><Link href="/creditos"><a>CREDITOS</a></Link></li>
            <li><Link href="/ajude"><a>AJUDE-NOS</a></Link></li>
          </ul>
        </nav>
        <nav className={style.menu}>
          <ul>
            <li style={{color:"#FF010A"}}><Link href="/"><a>INICIO</a></Link></li>
            <li><Link href="/artigos"><a>ARTIGOS</a></Link></li>
            <li><Link href="/creditos"><a>CREDITOS</a></Link></li>
            <li><Link href="/ajude"><a>AJUDE-NOS</a></Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default navbar