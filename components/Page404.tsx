import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site }) => {
  const title = site?.name || 'Notion Page Not Found'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.text}>页面未找到</h1>

          {/* {error ? (
            <p className={styles.text}>{error.message}</p>
          ) : (
            pageId && (
              <p className={styles.text}>
                Make sure that Notion page &quot;{pageId}&quot; is publicly
                accessible.
              </p>
            )
          )} */}

          <img
            src='/404.png'
            alt='404 Not Found'
            className={styles.errorImage}
          />

          <a className={styles.text} href='/'>返回首页</a>
        </main>
      </div>
    </>
  )
}
