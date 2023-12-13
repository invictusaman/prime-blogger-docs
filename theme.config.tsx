import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'


const config: DocsThemeConfig = {
  logo: <span>Prime Documentation</span>,
  chat: {
    link: 'https://t.me/+w1V7-iinKFQ5Njkx',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
        <circle cx="256" cy="256" r="256" fill="#59aae7"/>
        <path d="M256 0a258.53 258.53 0 0 0-33.391 2.167C348.216 18.53 445.217 125.933 445.217 256s-97.002 237.47-222.609 253.833C233.539 511.256 244.683 512 256 512c141.385 0 256-114.616 256-256S397.385 0 256 0z" fill="#3d9ae3"/><path d="M164.689 311.141L82.127 269.86c-2.263-1.132-2.285-4.353-.038-5.516L395.75 102.105c2.304-1.192 4.964.811 4.456 3.355l-54.004 270.017c-.385 1.927-2.446 3.011-4.253 2.237l-73.393-31.453c-.879-.377-1.884-.326-2.721.139l-94.839 52.688c-2.062 1.145-4.597-.345-4.597-2.705v-82.474a3.09 3.09 0 0 0-1.71-2.768z" fill="#fcfcfc"/><path d="M200.31 338.967l-.513-82.428c-.003-.528.27-1.018.72-1.293l133.899-81.798c1.518-.927 3.106 1.083 1.852 2.345l-101.9 102.624c-.112.114-.207.244-.278.387l-17.43 34.858-13.509 25.988c-.725 1.395-2.831.888-2.841-.683z" fill="#d8d7da"/>
      </svg>
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
        <meta name="twitter:url" content="https://www.twistblogg.com/docs/prime" />
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
