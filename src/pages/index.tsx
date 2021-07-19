import { Box, Flex, Image, Img, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from 'next/link';

import { Container } from "../components/Container";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Box>
      <Header />
      <Container>
        <Flex 
          w="100%"
          h={370}
        >
          <Flex
            w="100%"
            h={335}
            bgImage="/images/Background.svg"
          >
            <Text>
              5 Contimentes,
              <br />
              infinitas possibilidade
            </Text>
          </Flex>
        </Flex>
        <Flex 
          w="100%"
        >
          <Link href="/europe" passHref>
            <ChakraLink as="a">
              Europa
            </ChakraLink>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}
