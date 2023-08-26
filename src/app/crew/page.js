'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { bellefair, barlow, barlowCondensed } from '@/app/font'
import styles from './crew.module.css'
import { data } from '@/constants/data';
import { addIsActiveField } from '@/helpers/dataHelper';

export default function Crew() {

  const [crewData, setCrewData] = useState([]);

  useEffect(() => {
    setCrewData(addIsActiveField(data.crew))
  }, [data]);

  const onSelectionChange = (key) => {
    const temp = [...crewData]

    temp && temp.forEach(element => {
      if (key === element.name) {
        element.isActive = true
      } else
        element.isActive = false
    })

    setCrewData(temp)
  }

  return (
    <main className={styles.crew_main}>
      <p className={`${barlowCondensed.className} ${styles.title}`}>
        <span className={`${styles.title_no}`}>02</span> Meet your crew
      </p>

      <div className={styles.content_img_component}>
        <div className={styles.crew_content}>
          <div className='flex w-full flex-col'>
            <p className={`${bellefair.className} ${styles.role}`}>
              {crewData.find(val => val.isActive)?.role}
            </p>
            <p className={`${bellefair.className} ${styles.name}`}>
              {crewData.find(val => val.isActive)?.name}
            </p>
            <p className={`${barlow.className} ${styles.bio}`}>
              {crewData.find(val => val.isActive)?.bio}
            </p>
          </div>

          <div className={`${styles.pagination_component}`}>
            {
              crewData.map(element => {
                return (
                  <div key={element.name}
                    className={`${styles.circular_pagination} ${element.isActive ? styles.active : ''}`}
                    onClick={() => onSelectionChange(element.name)}
                  ></div>
                )
              })
            }
          </div>
        </div>

        <div className={`${styles.crew_img_component}`}>
          <Image
            src={crewData.find(val => val.isActive)?.images?.png}
            className={`${styles.crew_img}`}
            alt='crew-img'
            width={450}
            height={550}
          />
        </div>
      </div>
    </main>
  )
}
