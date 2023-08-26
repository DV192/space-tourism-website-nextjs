import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import {
  Navbar, NavbarBrand, NavbarContent,
  NavbarItem, NavbarMenu, NavbarMenuToggle,
  NavbarMenuItem
} from "@nextui-org/react";
import Link from 'next/link'
import Image from "next/image";
import Logo from "../../public/assets/shared/logo.svg";
import IconClose from "../../public/assets/shared/icon-close.svg";
import IconHamburger from "../../public/assets/shared/icon-hamburger.svg";
import { barlowCondensed } from '@/app/font';
import styles from './navbar.module.css';

export default function CustomNavbar(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname()

  const [navItem, setNavItem] = useState([
    { no: '00', item: 'Home', path: 'home', isActive: false, },
    { no: '01', item: 'Destination', path: 'destination', isActive: false, },
    { no: '02', item: 'Crew', path: 'crew', isActive: false, },
    { no: '03', item: 'Technology', path: 'technology', isActive: false, }
  ]);

  useEffect(() => {
    let temp = navItem

    temp.forEach(element => {
      if (pathname.includes(element.path)) {
        element.isActive = true
        props.setPage(element.path)
      } else
        element.isActive = false
    })

    setNavItem(temp);
  }, [pathname]);

  const ImageIconClose = () => {
    return (
      <Image
        src={IconClose}
        alt="close-icon"
      />
    )
  }

  const ImageIconHamburger = () => {
    return (
      <Image
        src={IconHamburger}
        alt="hamburger-icon"
      />
    )
  }

  const onSelectionChange = (index) => {
    let temp = [...navItem]
    temp.forEach((element, i) => {
      if (i === index) {
        element.isActive = true
        props.setPage(element.path)
      } else
        element.isActive = false
    })

    setNavItem(temp);
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}
      className={`
        ${barlowCondensed.className} ${styles.navbar} 
        bg-transparent backdrop-filter-none static
        data-[menu-open=true]:backdrop-filter-none
      `}
      classNames={{
        wrapper: [
          'max-w-[auto]',
          'px-0',
          'h-full',
        ],
        item: [
          'data-[active=true]:font-normal',
        ],
      }}
    >
      <NavbarContent>
        <NavbarBrand className={`${styles.navbar_brand}`}>
          <Image
            className={`${styles.logo_img}`}
            src={Logo}
            alt="logo-image"
          />
        </NavbarBrand>
      </NavbarContent>

      <div className={`${styles.horizontal_line}`}></div>

      <NavbarContent className={`flex gap-8 ${styles.navbar_content}`} justify="end">
        {
          navItem.map((item, index) => {
            return (
              <NavbarItem className={`${styles.navitem}`} isActive={item.isActive} key={`${item}-${index}`}>
                <Link className={`${styles.navlink}`} href={item.path} aria-current="page"
                  onClick={() => onSelectionChange(index)}
                >
                  <span className={`${styles.navlink_title_no}`}>{item.no}</span>
                  {item.item}
                </Link>
              </NavbarItem>
            )
          })
        }
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={`${styles.navbar_menu_toggle}`}
        icon={isMenuOpen ? ImageIconClose : ImageIconHamburger}
        srOnlyText=" "
      />

      <NavbarMenu className={`
        ${barlowCondensed.className} 
        ${styles.navbar_menu} 
        top-0 left-auto right-0  w-[70%] h-full
        pt-[108px] px-0 gap-8
        bg-[rgba(255, 255, 255, 0.04)]
      `}
      >
        {navItem.map((item, index) => (
          <NavbarMenuItem className={`${styles.menuitem}`} key={`${item.item}-${index}`}>
            <Link
              className={`w-full 
                ${styles.menulink} 
                ${item.isActive ? styles.active : ''}
              `}
              href={item.path}
              size="lg"
              onClick={() => onSelectionChange(index)}
            >
              <span className={`${styles.menulink_title_no}`}>{item.no}</span>
              {item.item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
