import React from "react";

import {
  Container,
  Flex,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { LuSquarePlus } from "react-icons/lu";

const Navbar = () => {
  return (
    <Container maxW="1140px" px={4}>
      <Flex
        minH="64px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip="text"
        >
          <Link to="/">Product Store</Link>
        </Text>

        <HStack gap={2}>
          <Link to="/create">
            <Button>
              <LuSquarePlus size={20} />
            </Button>
          </Link>
          <ColorModeButton />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;