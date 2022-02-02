import { GetStaticPaths, GetStaticProps } from "next"
import BannerContinet from "../../components/bannerContinent/BannerContinet"
import Cities from "../../components/cities/Cities"
import Header from "../../components/header/Header"
import InformationContinet from "../../components/informationContinet/InformationContinet"
import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

export interface ContinentProps {
  continent: {
    title: string,
    description: string,
    image: string,
    country: number,
    linguage: number,
    cities: number,
    citiesList: string,
    cities100: {
      thumbnail: string,
      flag: string,
      city: string,
      country2: string,
    }[]
  }
}

export const Continent = ({ continent }: ContinentProps) => {

  return (
    <>
      <Header />
      <BannerContinet continent={continent} />
      <InformationContinet continent={continent}/>
      <Cities continent={continent} />
    </>
  )
}

export default Continent

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient()
  const continents = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid
      }
    }
  })

  return {
    paths,
    fallback: true
  }

}

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient()
  const { slug } = context.params
  const response = await prismic.getByUID('continent', String(slug), {})

  const continent = {
    slug: response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    image: response.data.banner_image.url,
    country: response.data.country,
    linguage: response.data.linguage,
    cities: response.data.cities,
    citiesList: response.data.cities_list,
    cities100: response.data.cities_100.map(response => {
      return {
        thumbnail: response.thumbnail.url,
        flag: response.flag.url,
        city: response.city,
        country2: response.country1
      }
    })
  }

  return {

    props: {
      continent
    },
    revalidate: 1800
  }

}


