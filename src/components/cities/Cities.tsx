import { Text, Flex, SimpleGrid } from "@chakra-ui/react"
import { ContinentProps } from "../../pages/continent/[slug]"
import CardCities from "../cardCities/CardCities"


export const Cities = ({continent} :ContinentProps) => {

    return (
        <>
        <Flex w={["100%","100%","100%","1160px"]} algin="center" justifyContent="center" direction="column" m="auto">

            <Text
                fontSize="36px"
                fontWeight="500"
                mt="100px"
                ml={["10px", "10px", "10px", "0px"]}
              
            >
                Cidades +100
            </Text>

            <SimpleGrid
                columns={[1, 1, 2, 3, 4]} spacing={10}
                align="center"
                justify="center"
                mt="20px"
            >

            {continent.cities100.map(city => (
                <CardCities 
                    key={city.city}
                    city={city.city}
                    country={city.country2}
                    thumbnail ={city.thumbnail}
                    flag={city.flag}
                 />
            ))}
        
            </SimpleGrid>

        </Flex >
        </>
    )
}

export default Cities