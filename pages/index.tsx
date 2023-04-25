import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'


import '@getyoti/react-face-capture/index.css'
const FaceCapture = dynamic(() => import('@getyoti/react-face-capture'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <FaceCapture
          onSuccess={(args) => console.log('success', args)}
          onError={() => console.log('error')}
          faceCaptureAssetsRootUrl='yoti-assets/face-capture'
        />
      </main>
    </>
  )
}
