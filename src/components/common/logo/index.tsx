import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const LogoWhite = () => {
  return (
    <Link className=" flex-box" href={"/"}>
    <Image
      className="w-24 h-10 md:w-28 md:h-14"
      src="/images/homePages/logo-light.svg"
      alt="logo"
      width={200}
      height={200}
    />
  </Link>
  )
}

export const LogoDark = () => {
  return (
    <Link className=" flex-box " href={"/"}>
      <Image
        className="w-24 h-10"
        src="/images/homePages/logo-dark.svg"
        alt="logo"
        width={200}
        height={200}
      />
    </Link>
  )
}
