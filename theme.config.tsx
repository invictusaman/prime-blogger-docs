import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'


const config: DocsThemeConfig = {
  logo: <span>Prime Documentation</span>,
  chat: {
    link: 'https://www.twitter.com/twistblogg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" opacity="0.8">
        <path d="M2.867 3l6.869 9.818L2.734 21h2.646l5.539-6.49L15.461 21h5.91l-7.197-10.303L20.744 3h-2.605l-5.143 6.01L8.799 3H2.867z">
          </path></svg>
    )
  },
  docsRepositoryBase: 'https://github.com/tb-github-account/prime-blogger-theme-documentation',
  useNextSeoProps() {
      return {
        titleTemplate: '%s – Prime Theme Documentation'
      }
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Prime is a bold, elegant and premium blogger theme that delivers professional design with seo optimization, ads slots and market trending features."
        />
        <meta
          name="og:description"
          content="Prime is a bold, elegant and premium blogger theme that delivers professional design with seo optimization, ads slots and market trending features."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="twistblogg" />
        <meta name="twitter:url" content="https://docs.twistblogg.com" />
        <meta
          name="og:title"
          content={title ? title + ' – Prime Theme Docs' : 'Prime Theme Docs'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Prime Theme" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link href='/apple-icon-57x57.png' rel='apple-touch-icon' sizes='57x57'/>
        <link href='/apple-icon-60x60.png' rel='apple-touch-icon' sizes='60x60'/>
        <link href='/apple-icon-72x72.png' rel='apple-touch-icon' sizes='72x72'/>
        <link href='/apple-icon-76x76.png' rel='apple-touch-icon' sizes='76x76'/>
        <link href='/apple-icon-114x114.png' rel='apple-touch-icon' sizes='114x114'/>
        <link href='/apple-icon-120x120.png' rel='apple-touch-icon' sizes='120x120'/>
        <link href='/apple-icon-144x144.png' rel='apple-touch-icon' sizes='144x144'/>
        <link href='/apple-icon-152x152.png' rel='apple-touch-icon' sizes='152x152'/>
        <link href='/apple-icon-180x180.png' rel='apple-touch-icon' sizes='180x180'/>
        <link href='/android-icon-192x192.png' rel='icon' sizes='192x192' type='image/png'/>
        <link href='/android-icon-96x96.png' rel='icon' sizes='96x96' type='image/png'/>
        <link href='/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png'/>
      </>
    )
  },
  footer: {
    text: (
      <span><small>
        © {new Date().getFullYear()}{' '}
        Shared by <a href="https://www.twistblogg.com" target="_blank">
          TwistBlogg
        </a>
        .
        </small> 
      </span>
    )
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: (
      null
    )
  },
  feedback: {
    useLink(): string {
      return "https://www.twistblogg.com/p/contact.html";
    }
  },
}

export default config
