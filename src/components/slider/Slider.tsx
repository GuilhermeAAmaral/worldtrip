import { Flex, Heading, HStack, Text } from "@chakra-ui/react"
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface ContinentProps {
    continents: {
      slug: string,
      title: string,
      summary: string,
      image: string
    }[]
  }

export const Slider = ({continents}: ContinentProps) => {

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
                {continents.map (continent => {
                    return (
                        <SwiperSlide key={continent.title}>
                        <Flex
                            w="100%"
                            h="450px"
                            textAlign="center"
                            align="center"
                            justify="center"
                            bgImage={continent.image}
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            bgPosition="center"
                        >
                            <Link href={`/continent/${continent.slug}`} >
                                <HStack spacing={5}>
                                    <a>
                                        <Heading
                                            color="gray.100" 
                                            padding={5}
                                            fontSize={["24px","35px","48px"]}
                                        >
                                            {continent.title}
                                        </Heading>
                                        <Text
                                            color="gray.100"
                                            fontSize={["16px","20px","26px"]}
                                            fontWeight="700"
                                        >
                                            {continent.summary}
                                        </Text>
                                    </a>
                                </HStack>
                            </Link>
                        </Flex>
                    </SwiperSlide>
                    )
                })}

            </Swiper>

        </Flex>
    )
}

export default Slider