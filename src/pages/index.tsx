import { Box, Divider, Flex, Image, Img, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from 'next/link';

import { Container } from "../components/Container";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Box>
      <Header />
      <Container>
        <Box bgImage="/images/Background.svg">
          <Flex
            w="100%"
            h={370}
            justify="space-between"
            bg="transparent"
            px="20"
          >
            <Stack my="auto">
              <Text
                fontSize="2.125rem"
                fontWeight="500"
                color="gray.50"
                fontStyle="normal"
                lineHeight="3rem"
              >
                5 Contimentes, <br />
                infinitas possibilidade
              </Text>
              <Text
                fontSize="1.125rem"
                fontWeight="400"
                color="gray.50"
                fontStyle="normal"
                lineHeight="1.8rem"
              >
                Chegou a hora de tira do papel a viajem que você <br />
                sempre sonhou.
              </Text>
            </Stack>
            <Img src="/images/Airplane.svg" />
          </Flex>
        </Box>
        <Flex
          align="center"
          justify="space-around"
          m="16"
          mt="20"
          h="36"
        >
          <Img src="/images/Nightlife.svg" />
          <Img src="/images/Beach.svg" />
          <Img src="/images/Modern.svg" />
          <Img src="/images/Classic.svg" />
          <Img src="/images/More.svg" />
        </Flex>
        <Flex justify="center">
          <Divider border="2px solid" borderColor="yellow.500" w={100} />
        </Flex>
        <Flex
          w="100%"
          align="center"
          justify="center"
        >
          <Text
            fontSize="1.725rem"
            fontWeight="500"
            fontStyle="normal"
            lineHeight="3rem"
            textAlign="center"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
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
