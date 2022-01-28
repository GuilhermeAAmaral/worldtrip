import { Box, Flex } from "@chakra-ui/react"

export const Banner = () => {

    return (

        <Flex>
            <Box
              backgroundImage="url('images/Background.png')"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              bgSize="cover"
            >

            </Box>
        </Flex>
    )
}

export default Banner