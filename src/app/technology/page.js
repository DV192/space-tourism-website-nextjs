'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { bellefair, barlow, barlowCondensed } from '@/app/font'
import styles from './technology.module.css'
import { data } from '@/constants/data';
import { addIsActiveField } from '@/helpers/dataHelper';

export default function Technology() {

  const [technologyData, setTechnologyData] = useState([]);
  const [width, setWidth] = useState(0)

  const handleResize = () => setWidth(window.innerWidth)
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setTechnologyData(addIsActiveField(data.technology))
  }, [data]);

  const onSelectionChange = (key) => {
    const temp = [...technologyData]

    temp && temp.forEach(element => {
      if (key === element.name) {
        element.isActive = true
      } else
        element.isActive = false
    })

    setTechnologyData(temp)
  }

  return (
    <main className={styles.technology_main}>
      <p className={`${barlowCondensed.className} ${styles.title}`}>
        <span className={`${styles.title_no}`}>03</span> Space Launce 101
      </p>

      <div className={`${styles.technology_content} items-center`}>
        <div className={`flex ${styles.pagination_details_component}`}>
          <div className={`${styles.pagination_component}`}>
            {
              technologyData.map((element, index) => {
                return (
                  <div key={element.name}
                    className={`
                      ${styles.circular_pagination} 
                      ${element.isActive ? styles.active : ''} 
                      ${bellefair.className}
                    `}
                    onClick={() => onSelectionChange(element.name)}
                  >{index + 1}</div>
                )
              })
            }
          </div>

          <div className={`w-full ${styles.details_component}`}>
            <p className={`${barlowCondensed.className} ${styles.terminology}`}>
              The Terminology...
            </p>
            <p className={`${bellefair.className} ${styles.name}`}>
              {technologyData.find(val => val.isActive)?.name}
            </p>
            <p className={`${barlow.className} ${styles.description}`}>
              {technologyData.find(val => val.isActive)?.description}
            </p>
          </div>
        </div>

        <div className={`${styles.technology_img_component}`}>
          <Image
            src={
              width > 768 ?
                technologyData.find(val => val.isActive)?.images?.portrait
                :
                technologyData.find(val => val.isActive)?.images?.landscape
            }
            className={`${styles.technology_img}`}
            alt='technology-img'
            width={450}
            height={550}
          />
        </div>
      </div>
    </main>
  )
}
