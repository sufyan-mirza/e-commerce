import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import team1 from './assets/team1.jpg'
import team2 from './assets/team2.jpg'
import team3 from './assets/team3.jpg'

import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});
export default function Team2() {
  return (
    <div className='about'>
        <div className='about-container'>
            <div className='about-title'>
                <h1 className={montserrat.className}>
                Meet Our Team

                </h1>
                <p className={montserrat.className}>Problems trying to resolve the conflict between <br/>
                the two major realms of Classical physics: Newtonian mechanics </p>

            </div>
            <div className='about-content'>
                <div className='about-box'>
                    <div className='about-img'>
                        <Image
                        src={team1}
                        alt='1'
                        width={50}
                        height={50}
                        className='about-image'/>
                    </div>
                    <div className='about-text'>
                        <h1 className={montserrat.className}>Username</h1>
                        <p className={montserrat.className}>Profession</p>
                        <div className="flex gap-3 text-[#23A6F0] text-lg">
                        <FaInstagram />
                        <FaFacebook />
                        <FaTwitter />
                    </div>

                    </div>


                </div>
                <div className='about-box'>
                    <div className='about-img'>
                        <Image
                        src={team2}
                        alt='1'
                        width={50}
                        height={50}
                        className='about-image'/>
                    </div>
                    <div className='about-text'>
                        <h1 className={montserrat.className}>Username</h1>
                        <p className={montserrat.className}>Profession</p>
                        <div className="flex gap-3 text-[#23A6F0] text-lg">
                        <FaInstagram />
                        <FaFacebook />
                        <FaTwitter />
                    </div>

                    </div>


                </div>
                <div className='about-box'>
                    <div className='about-img'>
                        <Image
                        src={team3}
                        alt='1'
                        width={50}
                        height={50}
                        className='about-image'/>
                    </div>
                    <div className='about-text'>
                        <h1 className={montserrat.className}>Username</h1>
                        <p className={montserrat.className}>Profession</p>
                        <div className="flex gap-3 text-[#23A6F0] text-lg">
                        <FaInstagram />
                        <FaFacebook />
                        <FaTwitter />
                    </div>

                    </div>


                </div>
                
                

            </div>

        </div>

    </div>


    
  )
}
{/*.about{
  background-color: #ffffff;
  padding: 60px 0;
}
.about-container{
  max-width: 900px;
  margin: 0 auto;
}
.about-title{
  text-align: center;
  margin-bottom: 50px;
}
.about-title h1{
  font-size: 40px;
  color: #252B42;
  font-weight: 700;
  margin-bottom: 15px;

}
.about-title p{
  font-size: 14px;
  color: #737373;
}
.about-content{
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
}
.about-box{
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-image{
  width: 100%;
}
.about-img{
  width: 70%;
  margin-bottom: 20px;
}
.about-text{
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.about-text h1{
  font-size: 16px;
  color: #252B42;
  font-weight: 500;
}
.about-text p{
  font-size: 14px;
  color: #737373;
} */}