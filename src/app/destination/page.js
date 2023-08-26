'use client'
import { useEffect, useState } from 'react';
import { Divider } from "@nextui-org/react";
import Image from 'next/image'
import { bellefair, barlow, barlowCondensed } from '@/app/font'
import styles from './destination.module.css'
import { data } from '@/constants/data';
import { addIsActiveField } from '@/helpers/dataHelper';

export default function Destination() {

  const [destinationData, setDestinationData] = useState([]);

  useEffect(() => {
    setDestinationData(addIsActiveField(data.destinations))
  }, [data]);

  const onSelectionChange = (key) => {
    const temp = [...destinationData]

    temp && temp.forEach(element => {
      if (key === element.name) {
        element.isActive = true
      } else
        element.isActive = false
    })

    setDestinationData(temp)
  }

  return (
    <main className={styles.destination_main}>
      <p className={`${barlowCondensed.className} ${styles.title}`}>
        <span className={`${styles.title_no}`}>01</span> Pick your destination
      </p>

      <div className={styles.destination_content}>
        <div className={`${styles.planet_img_component}`}>
          <Image
            src={destinationData.find(val => val.isActive)?.images?.png}
            className={`${styles.planet_img}`}
            alt='planet-img'
            width={350}
            height={350}
          />
        </div>

        <div className={`w-full ${styles.details_component}`}>
          <div className={`${barlowCondensed.className} ${styles.tabs_component}`}>
            {
              destinationData.map(element => {
                return (
                  <div key={element.name}
                    className={`${styles.tab} ${element.isActive ? styles.active : ''} `}
                    onClick={() => { onSelectionChange(element.name) }}
                  >
                    {element.name}
                  </div>
                )
              })
            }
          </div>

          <div>
            <p className={`${bellefair.className} ${styles.name}`}>
              {destinationData.find(val => val.isActive)?.name}
            </p>
            <p className={`${barlow.className} ${styles.description}`}>
              {destinationData.find(val => val.isActive)?.description}
            </p>

            <Divider className={`${styles.divider} mt-8 mb-4`} />

            <div className={`${styles.distance_travel_component}`}>
              <div>
                <h6 className={`${barlowCondensed.className} ${styles.dist_trv_title}`}>Avg. Distance</h6>
                <p className={`${bellefair.className} ${styles.dist_trv_value}`}>
                  {destinationData.find(val => val.isActive)?.distance}
                </p>
              </div>

              <div>
                <h6 className={`${barlowCondensed.className} ${styles.dist_trv_title}`}>EST. Travel Time</h6>
                <p className={`${bellefair.className} ${styles.dist_trv_value}`}>
                  {destinationData.find(val => val.isActive)?.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
