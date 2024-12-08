import React from 'react'
import Topbar2 from '@/components/topbar2'
import Header from '@/components/header'
import ShopCard from '@/components/shop'
import Brand from '@/components/brand'
import Bestproduct from '@/components/bestproduct'
import PageNo from '@/components/pageNo'
import Footer from '@/components/footer'
export default function Shop() {
  return (
    <div>
        <Topbar2/>
        <Header/>
        <ShopCard/>
        <Brand/>
        <Bestproduct/>
        <PageNo/>
        <Footer/>
    </div>
  )
}
