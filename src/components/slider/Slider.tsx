import { Flex, Heading, HStack, Text } from "@chakra-ui/react"
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export const Slider = () => {

    return (

        <Flex w="90%" align="center" justify="center" m="auto" p="50px">

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}

                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 4000 }}
                style={{ width: '85%', flex: '1' }}

            >
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="450px"
                        textAlign="center"
                        align="center"
                        justify="center"
                        bgImage="url('images/ContinentImage.png')"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        bgPosition="center"
                    >
                        <Link href="/continent" >
                            <HStack spacing={5}>
                                <a>
                                    <Heading
                                        color="gray.100" 
                                        padding={5}
                                        fontSize="48px"
                                    >
                                        Europa
                                    </Heading>
                                    <Text
                                        color="gray.100"
                                        fontSize="26px"
                                        fontWeight="700"
                                    >
                                        O continente mais antigo
                                    </Text>
                                </a>
                            </HStack>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="450px"
                        textAlign="center"
                        align="center"
                        justify="center"
                        bgImage="url('images/ContinentImage.png')"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        bgPosition="center"
                    >
                        <Link href="/continent" >
                            <HStack spacing={5}>
                                <a>
                                    <Heading
                                        color="gray.100" 
                                        padding={5}
                                        fontSize="48px"
                                    >
                                        Europa
                                    </Heading>
                                    <Text
                                        color="gray.300"
                                        fontSize="26px"
                                        fontWeight="700"
                                    >
                                        O continente mais antigo
                                    </Text>
                                </a>
                            </HStack>
                        </Link>
                    </Flex>
                </SwiperSlide>

            </Swiper>

        </Flex>
    )
}

export default Slider