import { Box, Flex, Text, Image } from "@chakra-ui/react"

export const CardCities = ({city, country, thumbnail, flag }) => {

    return (
        <Box
        w="279px"
        h="276px"
        mt="20px"
        ml="auto"
        mr="auto"

    >
        <Image w="279px" src={thumbnail} />

        <Flex 
            direction="row"
            align="center"
            justify="space-between"
            p="25px"
            borderBottom="1px"
            borderLeft="1px"
            borderRight="1px"
            borderColor="yellow.400"
            backgroundColor="#ffb90818"

        >
            <Box textAlign="left">
                <Text pb="10px" fontSize="20px" fontWeight="600">{city}</Text>
                <Text>{country}</Text>
            </Box>

            <Box>
                <Image 
                    w="30px"
                    h="30px"
                    borderRadius="50px"
                    src={flag}
                 />
            </Box>
        </Flex>
    </Box>
    )
}

export default CardCities