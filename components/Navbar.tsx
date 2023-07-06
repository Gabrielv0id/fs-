import { NavLinks } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const Navbar = () => {
  const session = {}
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href="/">
          <Image 
            src= "/logo.png"
            width={100}
            height={43}
            alt='Financial'
          />
        </Link>
        <ul className='xl:flex hidden text-large gap-10'>
          {NavLinks.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.text}
          </Link>
          ))}
        </ul>
      </div>
      
      <div className='flexCenter gap-4'>
        { session ? (
          <>
            UserPhoto

            <Link href='/despesa/add'>
              Adicione uma despesa
            </Link>
            <Link href='/cartao/add'>
              Adicione um cartao
            </Link>
            <Link href='/despesa/add'>
              Adicione um saldo
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar