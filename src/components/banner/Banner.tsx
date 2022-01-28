import { Box, Text, Image, SimpleGrid, VStack } from "@chakra-ui/react"

export const Banner = () => {

    return (

        <Box
            bgImage="url('images/Background.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            w="100%"
            h="335px"
        >

            <SimpleGrid columns={2} gap={5} alignItems="center">
                
                    <Box>
                    <VStack spacing={7} >
                        <Text
                            fontSize="36px"
                            fontWeight="medium"
                            color="gray.100"
                            mr="50px"   
                        >
                            5 Continentes,<br/> infinitas possibilidades.
                        </Text>
                        
                        <Text
                            fontSize="18px"
                            fontWeight="regular"
                            color="gray.300"
                    
                        >
                            Chegou a hora de tirar do papel a viagem que você<br/>sempre sonhou.
                        </Text>
                    </VStack>
                    </Box>
               
                    <Box>
                        <Image
                            src="images/Airplane.png"
                            alt="foto do avião"
                            position="relative"
                            top="70px"
                            left="80px"
                        />
                    </Box>
                
            </SimpleGrid>

        </Box>

    )
}

export default Banner