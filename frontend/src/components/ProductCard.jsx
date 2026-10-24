import { useState } from "react";

import {
  Box,
  HStack,
  IconButton,
  Heading,
  Image,
  Text,
  Dialog,
  VStack,
  Portal,
  Input,
  Button,
} from "@chakra-ui/react";

import { LuTrash2, LuPencil } from "react-icons/lu";
import { useProductStore } from "../store/product";
import { useColorModeValue } from "./ui/color-mode";
import { toaster } from "./ui/toaster";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name || "",
    price: product.price || "",
    image: product.image || "",
  });

  const [show, setShow] = useState(false);

  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
      duration: 3000,
      closable: true,
    });
  };

  const handleUpdateProduct = async (pid) => {
    const { success, message } = await updateProduct(
        pid,
        updatedProduct
    );
    
    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
      duration: 3000,
      closable: true,
    });

    if (success) {
      setShow(false);
    }
  };

  const handleShow = () => {
    setUpdatedProduct({
      name: product.name || "",
      price: product.price || "",
      image: product.image || "",
    });

    setShow(true);
  };

  return (
    <>
      <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{
          transform: "translateY(-5px)",
          shadow: "xl",
        }}
        bg={bg}
        p={4}
      >
        <Image
          src={product.image}
          alt={product.name}
          h={48}
          w="full"
          objectFit="cover"
          borderRadius="md"
        />

        <Box pt={4}>
          <Heading
            as="h3"
            size="md"
            mb={2}
          >
            {product.name}
          </Heading>

          <Text
            fontWeight="bold"
            fontSize="xl"
            color={textColor}
            mb={4}
          >
            ${product.price}
          </Text>

          <HStack gap={2}>
            <IconButton
              aria-label="Edit product"
              colorPalette="blue"
              onClick={handleShow}
            >
              <LuPencil />
            </IconButton>

            <IconButton
              aria-label="Delete product"
              colorPalette="red"
              onClick={() =>
                handleDeleteProduct(product._id)
              }
            >
              <LuTrash2 />
            </IconButton>
          </HStack>
        </Box>
      </Box>

      <Dialog.Root
        open={show}
        onOpenChange={(details) =>
          setShow(details.open)
        }
        placement="center"
      >
        <Portal>
          <Dialog.Backdrop />

          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>
                  Update Product
                </Dialog.Title>
              </Dialog.Header>

              <Dialog.CloseTrigger />

              <Dialog.Body>
                <VStack gap={4}>
                  <Input
                    placeholder="Product Name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="Price"
                    name="price"
                    type="number"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="Image URL"
                    name="image"
                    value={updatedProduct.image}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      })
                    }
                  />
                </VStack>
              </Dialog.Body>

              <Dialog.Footer>
                <Button
                  variant="outline"
                  onClick={() => setShow(false)}
                >
                  Cancel
                </Button>

                <Button
                  colorPalette="blue"
                  onClick={() =>
                    handleUpdateProduct(product._id, updatedProduct)
                  }
                >
                  Update
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};

export default ProductCard;