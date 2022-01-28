import { Flex, VStack, Box, Image, Text, HStack } from "@chakra-ui/react"

export const Options = () => {

    return (

        <Flex
            direction="row"
            algin="center"
            justify="center"
            pt="80px"
        >

            <HStack spacing="145px">

                <Box>
                    <VStack spacing={4}>
                        <Image src="images/Cocktail.png" />
                        <Text fontSize="24px" fontWeight="semibold" color="gray.700">vida noturna</Text>
                    </VStack>
                </Box>

                <Box>
                    <VStack spacing={4}>
                        <Image src="images/Beach.png" />
                        <Text fontSize="24px" fontWeight="semibold" color="gray.700">praia</Text>
                    </VStack>
                </Box>

                <Box>
                    <VStack spacing={4}>
                        <Image src="images/Modern.png" />
                        <Text fontSize="24px" fontWeight="semibold" color="gray.700">moderno</Text>
                    </VStack>
                </Box>

                <Box>
                    <VStack spacing={4}>
                        <Image src="images/Classic.png" />
                        <Text fontSize="24px" fontWeight="semibold" color="gray.700">clássico</Text>
                    </VStack>
                </Box>

                <Box>
                    <VStack spacing={3}>
                        <Image src="images/More.png" />
                        <Text fontSize="24px" fontWeight="semibold" color="gray.700">e mais...</Text>
                    </VStack>
                </Box>

            </HStack>

        </Flex>
    )
}

export default Options