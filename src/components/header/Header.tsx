import { Flex, Image } from "@chakra-ui/react"

export const Header = () => {

    return (

        <Flex
            as="header"
            bg="white"
            w="100w"
            h="100px"
            align="center"
            justify="center"
        >
            <Image 
                src="images/Logo.png"
                alt="logo"
            />
        </Flex>
    )
}

export default Header 