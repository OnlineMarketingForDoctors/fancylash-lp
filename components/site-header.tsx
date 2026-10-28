'use client'

import { useState } from 'react'

type NavItem = { href: string; label: string }

const DEFAULT_NAV: NavItem[] = [
  { href: '#choose', label: 'The Lifts' },
  { href: '#tint', label: 'Pricing' },
  { href: '#how', label: 'How It Works' },
  { href: '#faq', label: 'FAQ' },
  { href: '#instagram', label: 'Gallery' },
  { href: '#visit', label: 'Visit' },
]

export function SiteHeader({
  bookUrl,
  nav = DEFAULT_NAV,
}: {
  bookUrl: string
  nav?: NavItem[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container">
        <a
          href="https://fancylash.net/"
          className="brand"
          aria-label="Fancy Lash home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://fancylash.net/wp-content/uploads/2020/08/logo.png.webp"
            alt="Fancy Lash"
            width={150}
            height={60}
          />
        </a>

        <nav
          id="primary-nav"
          className={`main-nav${open ? ' open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <a className="btn btn-pink btn-sm" href={bookUrl} rel="nofollow">
            Book online
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-controls="primary-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

