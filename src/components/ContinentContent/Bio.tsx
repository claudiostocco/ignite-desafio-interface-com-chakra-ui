import { Text } from "@chakra-ui/react";

interface BioProps {
    description: string
}

export function Bio({ description }: BioProps) {
    return (
        <Text
            w={600}
            fontSize="1.5rem"
            fontWeight="400"
            color="gray.600"
            fontStyle="normal"
            lineHeight="9"
        >
            {description}
        </Text>

    )
}