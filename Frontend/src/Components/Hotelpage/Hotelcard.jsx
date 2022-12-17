import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Image, Stack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export function HotelCard({
  imageUrl,
  reviewCount,
  rating,
  availaberooms,
  formattedPrice,
  title,
  data,
}) {
  const property = {
    imageUrl: imageUrl,
    imageAlt: "Rear view of modern home with pool",
    beds: `${Math.floor(Math.random() * 3) + 1}`,
    baths: `${Math.floor(Math.random() * 3) + 1}`,
    title: title,
    formattedPrice: `$ ${formattedPrice} `,
    reviewCount: reviewCount,
    rating: rating,
  };

  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image width={"100%"} src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} Availabe Rooms &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / day
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
      <Stack width={"83.5%"} alignItems={"start"} m={"auto"}>
        <Link to={"/payment"}>
          <Button
            variant={"outline"}
            borderColor={"teal.500"}
            mt={-2}
            mb={5}
            _hover={{ bgColor: "teal.600", color: "white" }}
            onClick={() => localStorage.setItem("abc", JSON.stringify(data))}
          >
            Book Now
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
