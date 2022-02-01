import { Box, Text, Image, VStack, useBreakpointValue, Flex } from "@chakra-ui/react"

export const Banner = () => {

    const isWideVersion = useBreakpointValue({
       base: false,
       lg:true 
    })

    return (

        <Box
            bgImage="url('images/Background.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            w="100%"
            h={["183px","335px"]}
        >

            <Flex alignItems="center" gap={5} justifyContent="center">

                <Box >
                    <VStack spacing={7} >
                        <Text
                    
                            fontSize={["25px", "36px"]}
                            fontWeight="medium"
                            color="gray.100"
                            mr={["70px","50px"]}
                      
                        >
                            5 Continentes,<br/> infinitas possibilidades.
                        </Text>

                        <Text
                    
                            fontSize={["14px", "18px"]}
                            fontWeight="regular"
                            color="gray.300"
                        >
                            Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.
                        </Text>
                    </VStack>
                </Box>

                { isWideVersion &&                 
                <Box>
                    <Image
                        src="images/Airplane.png"
                        alt="foto do avião"
                        position="relative"
                        top="70px"
                        left="80px"
                    />
                </Box>}

            </Flex>

        </Box>

    )
}

export default Banner