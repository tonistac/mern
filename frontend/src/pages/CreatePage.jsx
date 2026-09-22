import { useState } from "react";
import { useColorModeValue } from "../components/ui/color-mode.jsx";
import { VStack, Container, Heading, Box, Input, Button, } from "@chakra-ui/react";


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleAddProduct = () => {
    console.log(newProduct);
  };

  return ( <Container maxW={"600px"} py={12}>
    <VStack
      gap={8}>
        <Heading as={"h1"} size={"4xl"} textAlign={"center"}  fontWeight={"bold"} mb={6}>
          Create New Product
        </Heading>

        <Box
          // w="full" bg={useColorModeValue("white", "gray.800")}
          w="full"
          bg="bg.panel"
          p={6}
          borderRadius="md"
          boxSadow="lg"
          >
          <VStack gap={4}>
            <Input 
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              size="lg"
            />
            <Input
              placeholder='Product Description'
              name='description'
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              size="lg"
            />
            <Input
              placeholder='Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 })}
              size="lg"
            />
            <Input
              placeholder='Product Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Button colorPalette='blue' onClick={handleAddProduct} w='full' size="lg">
              Add Product
            </Button>

          </VStack>
        </Box>

    </VStack>

  </Container>
 );
}

export default CreatePage