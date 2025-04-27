"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import "@/styles/Navbar.css"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      {!isMobile && (
        <div className="announcement-bar">
          {new Array(3).fill(0).map((_, index) => (
            <div key={index} className="announcement-item">
              <Image src="/header-logo.svg" alt="Header Logo" width={15} height={10} />
              <span>Lorem ipsum dolor</span>
            </div>
          ))}
        </div>
      )}
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            {isMobile && (
              <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                <div className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            )}
            <div className="">
              <Image src="/logo.svg" alt="Header Logo" width={35} height={35} />
            </div>
            <div className="logo-text">
              Logo
            </div>
          </div>

          <div className="nav-icons">
            <button aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            <button aria-label="Wishlist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            {!isMobile && (
              <button aria-label="Account">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
            )}

            <button aria-label="Cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>

            {!isMobile && (
              <div className="language-selector">
                <span>ENG</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            )}
          </div>
        </div>

        {!isMobile && (
          <nav className="nav-links">
            <ul>
              <li>
                <Link href="/shop">SHOP</Link>
              </li>
              <li>
                <Link href="/skills">SKILLS</Link>
              </li>
              <li>
                <Link href="/stories">STORIES</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        )}

        {isMobile && isMenuOpen && (
          <div className="mobile-menu">
            <nav>
              <ul>
                <li >
                  <Link href="/shop">SHOP</Link>
                </li>
                <li>
                  <Link href="/skills">SKILLS</Link>
                </li>
                <li>
                  <Link href="/stories">STORIES</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT</Link>
                </li>
                <li>
                  <Link href="/contact">CONTACT US</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
