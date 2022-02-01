import { Flex, VStack, Box, Image, Text, Stack, useBreakpointValue } from "@chakra-ui/react"

export const Options = () => {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true, 
        md: '48em'
    })

    return (
      
        <Flex
            direction={["column", "row"]}
            algin="center"
            justify="center"
            mt="80px"
        >

            <Stack spacing={["25px", "25px","50px", "145px"]} direction={['column', 'row']}>

                <Box>
                    <VStack spacing={4}>
                        { isWideVersion && (<Image src="images/Cocktail.png" />)}
                        <Text fontSize={["18px", "18px", "20px", "24px"]} fontWeight="semibold" color="gray.700">vida noturna</Text>
                    </VStack>
                </Box>

                <Box>
                    <VStack spacing={4}>
                    { isWideVersion && (<Image src="images/Beach.png" />)}
                        <Text fontSize={["18px", "18px", "20px", "24px"]} fontWeight="semibold" color="gray.700">praia</Text>
                    </VStack>
                </Box>

                <Box>
                    <VStack spacing={4}>
                       {isWideVersion && (<Image src="images/Modern.png" />)} 
                        <Text fontSize={["18px", "18px", "20px", "24px"]} fontWeight="semibold" color="gray.700">moderno</Text>
                    </VStack>
                </Box>

                <Box>
                    <VStack spacing={4}>
                        {isWideVersion && (<Image src="images/Classic.png" />)}
                        <Text fontSize={["18px", "18px", "20px", "24px"]} fontWeight="semibold" color="gray.700">clássico</Text>
                    </VStack>
                </Box>

                <Box>
                    <VStack spacing={3}>
                        {isWideVersion && (<Image src="images/More.png" />)}
                        <Text fontSize={["18px", "18px", "20px", "24px"]} fontWeight="semibold" color="gray.700">e mais...</Text>
                    </VStack>
                </Box>

            </Stack>

        </Flex>
   
    )
}

export default Options