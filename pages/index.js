import React from 'react'
import Container from 'components/container'
import Hero from 'components/hero'

export default function Home() {
  const pageTitle = 'ページタイトルが入るよ'
  return (
    // TODO: keyを付ける場合は、React.Fragmentで
    // <React.Fragment key="test">
    //   <h1 style={{ color: 'orange' }}>{pageTitle}</h1>
    //   <p>アウトプット</p>
    // </React.Fragment>
    <Container>
      <Hero
        title='CUBE'
        subTitle='アウトプットしていくサイト'
        imageOn
      />
    </Container>

  )
}
