import { Flex, Text } from "@chakra-ui/react"

export const BannerContinet = () => {

    return (

        <Flex
            bgImage="url('images/Europe.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
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
                Europa
            </Text>
            
        </Flex>
    )
}

export default BannerContinet