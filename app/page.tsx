'use client'
import React from 'react'
import Image from 'next/image'
import Dragon from '../public/pngwing.com (9).png'
import Bills from '../public/beerus-silhouette-image-4.png'
import html2canvas from 'html2canvas'
import { FaLightbulb } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { DiGithubBadge } from "react-icons/di";
import Link from 'next/link';
import Styles from '../app/phone.module.css'


export default function Home() {
  const [selectedPower, setSelectedPower] : [string, React.Dispatch<React.SetStateAction<string>>]  = React.useState('');
  const [selectedRaça, setSelectedRaça]: [string, React.Dispatch<React.SetStateAction<string>>]  = React.useState('')
  const [selectedUni, setSelectedUni]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState('')
  const [selectedTra, setSelectedTra] : [string, React.Dispatch<React.SetStateAction<string>>]  = React.useState('')
  const [selectedAce, setSelectedAce] : [string, React.Dispatch<React.SetStateAction<string>>]  = React.useState('')
  const [selectedPre, setSelectedPre] : [string, React.Dispatch<React.SetStateAction<string>>] = React.useState('')
  const [isSuperMode, setIsSuperMode] : [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState(false);

  const powers: string[] = [
    'Kamehameha',
    'Gallick Gun',
    'Destruction Wave',
    'Final Shine'
  ];

  const raça: string[] = [
    'Humano',
    'Sayajin',
    'Híbrido',
    'Namekuseijin'
  ]


  const uni: string[] = [
    'Universo 6',
    'Universo 7',
    'Universo 11',
    'Universo 12'
  ]

  const tra: string[] = [
    'Takahiro Imamura',
    'Naogia Yamamuro',
    'Kazuya Hisada',
    'Noboru Koizumi',
    'Seiko Uchiyama',
    'Bushou IDE'
  ]

  const ace: string[] = [
    'Brincos',
    'Espada',
    'Scouter'
  ]

  const pre: string[] = [
    'Radar',
    'Dragon Ball',
    'Botão para Chamar Zeno-Sama',
    'Comunicador Whis'
  ]
    
    const handleClick = () => {
      setSelectedPower(powers[Math.floor(Math.random() * powers.length)]);
      setSelectedRaça(raça[Math.floor(Math.random() * raça.length)]);
      setSelectedUni(uni[Math.floor(Math.random() * uni.length)]);
      setSelectedTra(tra[Math.floor(Math.random() * tra.length)]);
      setSelectedAce(ace[Math.floor(Math.random() * ace.length)]);
      setSelectedPre(pre[Math.floor(Math.random() * pre.length)]);
    }


    const handleCompartilhar = () => {
      
      const sectionn = document.getElementById('section');

      if (sectionn) {
        html2canvas(sectionn).then(canvas => {
          const img = canvas.toDataURL("../public/pngwing.com (9).png");
              const link = document.createElement("a");
              link.download = "dragonball.png";
              link.href = img;
              link.click();
          });
      } else {
        console.log('Elemento não encontrado')
      }
  }
  
  
  const handleTheme = () => {
    setIsSuperMode(!isSuperMode);
  };

  return (
  <>
   <div id={Styles.total} className={`${isSuperMode ? 'bg-black': ''}`}>   

    <div id={Styles.containerBTN} className='flex justify-center items-center p-8 content-between space-x-16 '>
      <button id={Styles.lightBTN} className='bg-red-500 p-10 mr-4 rounded text-center hover:text-white drop-shadow-2xl'  onClick={handleTheme}>
      <FaLightbulb className='text-white' />
        </button>
        <button id={Styles.playBTN} className='bg-red-500 p-[28px] mr-4 rounded text-center hover:text-white drop-shadow-2xl' onClick={handleClick}
        >Play</button>
        <Link id={Styles.linkBTN}  className='bg-red-500 p-8 mr-4 rounded text-center hover:text-white drop-shadow-2xl' target='_blank' href='https://www.linkedin.com/in/pedro-luiz-277055167/'>
        <FaLinkedinIn />
      </Link>
      <Link id={Styles.gitBTN} className='bg-red-500 p-10 mr-4 rounded text-center text-white drop-shadow-2xl' target='_blank' href='https://github.com/tomadadefogo'>
        <DiGithubBadge />
      </Link>
    </div>


  <section id={Styles.section} className={`${isSuperMode ? 'text-white flex flex-col justify-center items-center bg-purple-500 m-16 rounded-3xl h-[850px] place-content-between': 'text-white flex flex-col justify-center items-center bg-blue-500 m-16 rounded-3xl h-[850px] place-content-between'}`}>
      <div className=' h-full flex flex-wrap justify-center items-center flex-col rounded-xl '>
 
    <div className='bg-yellow-500 rounded-xl text-center  items-center leading-8  md:w-1/2 p-4  drop-shadow-2xl'>
            <h1 className='text-center text-red-500 font-bold text-5xl'>Poder</h1>
            <p className='text-center text-2xl'>{selectedPower}</p>

            <h1 className='text-center text-5xl text-red-500 font-bold'>Raça</h1>
            <p className='text-center text-2xl'>{selectedRaça}</p>

            <h1 className='text-center text-5xl text-red-500 font-bold'>Universo</h1>
            <p className='text-center text-2xl'>{selectedUni}</p>

            <h1 className='text-center text-5xl text-red-500 font-bold'>Traços</h1>
            <p className='text-center text-2xl'>{selectedTra}</p>

            <h1 className='text-center text-5xl text-red-500 font-bold'>Acessório</h1>
            <p className='text-center text-2xl'>{selectedAce}</p>

            <h1 className='text-center text-5xl text-red-500 font-bold'>Presente</h1>
            <p className='text-center text-2xl'>{selectedPre}</p>
    </div>
      
        <Image id={Styles.noImage} className={`${isSuperMode ? 'mx-24 mt-8' : ' ml-2'} h-full object-contain  md:w-1/2`}
  src={isSuperMode ? Bills : Dragon}
  alt="Dragon Ball" />
    
      </div>
        <button className={`${isSuperMode ? 'bg-black drop-shadow-2xl text-white  p-2 mb-48 rounded-lg w-1/3 md:w-1/5' :'bg-red-500 text-black drop-shadow-2xl hover:text-white  p-2 mb-48 rounded-lg w-1/3 md:w-1/5'}`} onClick={handleCompartilhar}>Compartilhar</button>

   </section>
      <div className='flex flex-wrap justify-center items-center'>
          <h3  id={Styles.bottom} className={`${isSuperMode ? 'text-emerald bg-purple-600  rounded mt-[-50px]':'bg-red-500  rounded  text-white  mt-[-50px] '} flex flex-wrap justify-center items-center`}  >* Para melhor exibição, recomendamos que tire um printScreen da tela.</h3>
      </div>
</div> 
    </>
  )
}
