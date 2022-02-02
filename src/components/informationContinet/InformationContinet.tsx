import { Box, Flex, Text, Stack, Popover, PopoverTrigger, Icon, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react"
import { RiInformationLine } from "react-icons/ri"
import { ContinentProps } from "../../pages/continent/[slug]"


export const InformationContinet = ({continent}: ContinentProps) => {

    return (

        <Flex
            direction={["column","row"]}
            algin="center"
            justify="center"
            mt="100px"

        >
            <Box w={["100vw","100%", "100vw","600px"]} mr={["auto", "100px"]}>
                <Text
                    textAlign="justify"
                    fontSize={["18px","21px","24px"]}
                    lineHeight="36px"
                    fontWeight="400"
                    p={["20px"]}
                    mt="auto"
                    mb="auto"
                >
                    {continent.description}
                </Text>
            </Box>

            <Flex direction="row" mr="25px" mt="auto" mb="auto">
                <Stack spacing={[10, 14]} direction={["row","column", "column", "row"]}>
                    <Box >
                        <Text
                            fontSize={["35px","48px"]}
                            lineHeight="72px"
                            fontWeight="600"
                            align="center"
                            color="yellow.400"
                            p={["20px"]}
                        >
                            {continent.country}
                        </Text>
                        <Text
                            fontSize={["20px","24px"]}
                            fontWeight="600"
                            lineHeight="36px"
                            align="center"
                        >
                            países
                        </Text>
                    </Box>

                    <Box>
                        <Text
                            fontSize={["35px","48px"]}
                            lineHeight="72px"
                            fontWeight="600"
                            align="center"
                            color="yellow.400"
                            p={["20px"]}
                        >
                            {continent.linguage}
                        </Text>
                        <Text
                            fontSize={["20px","24px"]}
                            fontWeight="600"
                            lineHeight="36px"
                            align="center"
                        >
                            línguas
                        </Text>
                    </Box>

                    <Box>
                        <Text
                            fontSize={["35px","48px"]}
                            lineHeight="72px"
                            fontWeight="600"
                            align="center"
                            color="yellow.400"
                            p={["20px"]}
                        >
                            {continent.cities}
                        </Text>
                        <Text
                            fontSize={["20px","24px"]}
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
                                        {continent.citiesList}
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Text>
                    </Box>
                </Stack>
            </Flex>

        </Flex>

    )
}

export default InformationContinet