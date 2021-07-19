import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    return (
        <Box w="100vw">
            <Flex
                w="100%"
                maxW={1440}
                mx="auto"
                my="4"
                px="6"
            >
                {children}
            </Flex>
        </Box>
    );
}