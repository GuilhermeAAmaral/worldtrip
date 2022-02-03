import { Flex, Icon, Image } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { RiArrowDropLeftLine } from 'react-icons/ri'

export const Header = () => {

    const { asPath } = useRouter()
    const notHomePage = asPath != "/"

    return (

        <Flex
            as="header"
            bg="white"
            w="100w"
            h="100px"
            align="center"
            justify="center"
        >
            {notHomePage && (
                <Link href="/">
                    <a>
                        <Icon 
                        as={RiArrowDropLeftLine} 
                        fontSize="50"
                        position="absolute"
                        left="7"
                        top="7"
                        />
                    </a>
                </Link>
            )}

            <Image 
                src="/images/Logo.png"
                alt="logo"
                w={["150px","200px"]}
            />
        </Flex>
    )
}

export default Header 