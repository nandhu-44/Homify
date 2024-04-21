import Button from '@/common/components/Button'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/about" ><Button/></Link>
    </div>
  )
}

export default Home