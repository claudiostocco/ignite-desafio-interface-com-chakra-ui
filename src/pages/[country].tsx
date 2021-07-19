import { Box } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Header } from "../components/Header";

export default function Country() {
    return (
        <Box>
            <Header isCountry />
            <Container>
                <h1>Country</h1>
            </Container>
        </Box>
    )
}