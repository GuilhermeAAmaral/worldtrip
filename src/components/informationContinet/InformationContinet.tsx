import { Box, Flex, Text, HStack, Popover, PopoverTrigger, Icon, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react"
import { RiInformationLine } from "react-icons/ri"

export const InformationContinet = () => {

    return (

        <Flex
            direction="row"
            algin="center"
            justify="center"
            mt="100px"

        >
            <Box w="600px" mr="100px">
                <Text
                    textAlign="justify"
                    fontSize="24px"
                    lineHeight="36px"
                    fontWeight="400"
                >
                    A Europa é, por convenção, um dos seis continentes do mundo.
                    Compreendendo a península ocidental da Eurásia,
                    a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes
                    Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>
            </Box>

            <Flex direction="row">
                <HStack spacing={14}>
                    <Box>
                        <Text
                            fontSize="48px"
                            lineHeight="72px"
                            fontWeight="600"
                            align="center"
                            color="yellow.400"
                        >
                            50
                        </Text>
                        <Text
                            fontSize="24px"
                            fontWeight="600"
                            lineHeight="36px"
                            align="center"
                        >
                            países
                        </Text>
                    </Box>

                    <Box>
                        <Text
                            fontSize="48px"
                            lineHeight="72px"
                            fontWeight="600"
                            align="center"
                            color="yellow.400"
                        >
                            60
                        </Text>
                        <Text
                            fontSize="24px"
                            fontWeight="600"
                            lineHeight="36px"
                            align="center"
                        >
                            línguas
                        </Text>
                    </Box>

                    <Box>
                        <Text
                            fontSize="48px"
                            lineHeight="72px"
                            fontWeight="600"
                            align="center"
                            color="yellow.400"
                        >
                            27
                        </Text>
                        <Text
                            fontSize="24px"
                            fontWeight="600"
                            lineHeight="36px"
                            align="center"
                        >
                            cidade + 100
                            <Popover>
                               <PopoverTrigger>
                                   <span>
                                       <Icon 
                                        cursor="pointer"
                                        as={RiInformationLine} 
                                        ml="1"
                                        color="gray.400"
                                        h="20px"
                                        w="20px"
                                    />
                                   </span>
                                </PopoverTrigger> 
                                <PopoverContent bg="gray.700" color="yellow.400">
                                    <PopoverArrow bg="gray.700"/>
                                    <PopoverCloseButton />
                                    <PopoverBody fontSize="lg" fontWeight="400">
                                        outros Paises
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Text>
                    </Box>
                </HStack>
            </Flex>

        </Flex>

    )
}

export default InformationContinet