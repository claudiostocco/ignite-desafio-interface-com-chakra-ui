import { Box, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

import db from '../../continents.json';

import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Continent } from "../utils/types";

interface ShowContinentPops {
    continent: Continent
};

export default function ShowContinent({ continent }: ShowContinentPops) {
    console.log(continent);
    return (
        <Box>
            <Header isCountry />
            <Container>
                <h1>EEEE</h1>
                {/* <Box
                    w="100%"
                    h={500}
                    bgImage={continent.image || ''}
                >
                    <Text
                        fontSize="2.5rem"
                        fontWeight="600"
                        color="gray.50"
                        fontStyle="normal"
                        lineHeight="4rem"
                    >
                        {continent.name}
                    </Text>
                </Box> */}

            </Container>
        </Box>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params.continent;
    console.log(id);
    const continent = db.continents.filter(value => value.id === id)?.[0] || {} as Continent;
    console.log(continent);
    return {
        props: continent
    }
}