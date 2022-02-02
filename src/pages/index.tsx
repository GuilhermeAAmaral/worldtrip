import { Flex, Image, Text } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Banner from "../components/banner/Banner"
import Header from '../components/header/Header'
import Options from "../components/options/Options"

import Slider from '../components/slider/Slider'
import { getPrismicClient } from "../services/prismic"

import Prismic from '@prismicio/client'


interface HomeProps {
  continents: {
    slug: string,
    title: string,
    summary: string,
    image: string
  }[]
}

export const Home = ({continents}: HomeProps) => {

  return (

    <>
      <Header />
      <Banner />
      <Options />

      <Flex algin="center" justify="center" p={["50px","100px"]}>
        <Image
         
          src="images/Divider.png" />
      </Flex>


      <Text
        align="center"
        fontSize={["18px", "18px", "18px", "26px"]}
        fontWeight="normal"
        color="gray.700"
      >
        Vamos nessa?<br/>Então escolha seu continente
      </Text>

      <Slider continents={continents}/>

    </>

  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )

  console.log('resposta do prismic', response)

  const continents = response.results.map (continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.image.url
    }
  })

  return {
    
    props: {
      continents
    },
    revalidate: 1800
  }
}

