import { Flex, Text } from "@chakra-ui/react"
import { ContinentProps } from "../../pages/continent/[slug]"


export const BannerContinet = ({continent}: ContinentProps) => {

    return (

        <Flex
            bgImage={continent.image}
            bgPosition="center"
            bgSize="cover"
            w="100%"
            h="500px"
        >
            <Text
                mt="370px"
                ml="100px"

                fontSize="48px"
                fontWeight="600"
                color="gray.100"
            >
                {continent.title}
            </Text>
            
        </Flex>
    )
}

export default BannerContinet