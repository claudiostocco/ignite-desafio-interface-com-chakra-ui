import { Box, HStack, Text } from "@chakra-ui/react";

interface InfoProps {
    countries: number
    languages: number
    citiesIn100: number
}

export function Info({ countries, languages, citiesIn100 }: InfoProps) {
    return (
        <HStack spacing="12" w={500} justify="center">
            <Box textAlign="center">
                <Text
                    fontSize="3rem"
                    fontWeight="600"
                    color="yellow.500"
                    fontStyle="normal"
                >
                    {countries}
                </Text>
                <Text
                    fontSize="1.5rem"
                    fontWeight="600"
                    color="gray.600"
                    fontStyle="normal"
                    lineHeight="9"
                >
                    países
                </Text>
            </Box>
            <Box textAlign="center">
                <Text
                    fontSize="3rem"
                    fontWeight="600"
                    color="yellow.500"
                    fontStyle="normal"
                >
                    {languages}
                </Text>
                <Text
                    fontSize="1.5rem"
                    fontWeight="600"
                    color="gray.600"
                    fontStyle="normal"
                    lineHeight="9"
                >
                    linguas
                </Text>
            </Box>
            <Box textAlign="center">
                <Text
                    fontSize="3rem"
                    fontWeight="600"
                    color="yellow.500"
                    fontStyle="normal"
                >
                    {citiesIn100}
                </Text>
                <Text
                    fontSize="1.5rem"
                    fontWeight="600"
                    color="gray.600"
                    fontStyle="normal"
                    lineHeight="9"
                >
                    cidades +100
                </Text>
            </Box>
        </HStack>
    )
}