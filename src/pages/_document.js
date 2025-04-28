import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Primary Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          {/* SEO Meta Tags */}
          <meta 
            name="description" 
            content="Appscrip: A modern e-commerce platform offering unique, curated products with seamless shopping experience and global accessibility." 
          />
          <meta 
            name="keywords" 
            content="e-commerce, online shopping, fashion, lifestyle, global marketplace" 
          />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.appscrip.com/" />
          <meta 
            property="og:title" 
            content="Appscrip - Modern E-commerce Experience" 
          />
          <meta 
            property="og:description" 
            content="Discover a world of unique products at your fingertips. Shop global, shop smart with Appscrip." 
          />
          <meta 
            property="og:image" 
            content="/og-image.png" 
          />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.appscrip.com/" />
          <meta 
            property="twitter:title" 
            content="Appscrip - Modern E-commerce Experience" 
          />
          <meta 
            property="twitter:description" 
            content="Discover a world of unique products at your fingertips. Shop global, shop smart with Appscrip." 
          />
          <meta 
            property="twitter:image" 
            content="/og-image.png" 
          />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://www.appscrip.com" />
          
          {/* Robots Meta Tag */}
          <meta name="robots" content="index, follow" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          
          {/* Preload Critical Assets */}
          <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </Head>
        <body style={{margin:0}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
