import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import Banner from "../components/banner/Banner"
import Header from '../components/header/Header'
import Options from "../components/options/Options"

import Slider from '../components/slider/Slider'


export const Home = () => {

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

      <Slider />

    </>

  )
}

export default Home