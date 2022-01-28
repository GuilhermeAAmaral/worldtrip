import { Flex, Image, Text } from "@chakra-ui/react"
import Banner from "../components/banner/Banner"
import Header from '../components/header/Header'
import Options from "../components/options/Options"


export const Home = () => {

  return (

    <>
      <Header />
      <Banner />
      <Options />

      <Flex algin="center" justify="center" p="100px">
        <Image
          ml= "30px"
          src="images/Divider.png" />
      </Flex>


      <Text
        align="center"
        fontSize="36px"
        fontWeight="normal"
        color="gray.700"
      >
        Vamos nessa?<br/>Então escolha seu continente
      </Text>

    </>

  )
}

export default Home