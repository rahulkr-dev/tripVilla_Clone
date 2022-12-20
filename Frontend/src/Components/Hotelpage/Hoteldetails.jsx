import {
  Box,
  Select,
  Stack,
  useToast,
  Badge,
  Button,
  Image,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToast } from "../../Utils/extraFunctions";
import AboutFooter from "../Utils/AboutFooter";

function Hotels() {
  let [data, setdata] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();
  let cityname = useSelector((store) => store.search.searchData.location);
  useEffect(() => {
    getdata();
  }, []);
  async function getdata() {
    try {
      let res = await axios.post(`https://cozytrip.up.railway.app/hotel`, {
        data: {
          city: cityname,
        },
      });
      console.log(res);
      if (res.data.length === 0) {
        setToast(toast, "Hotels Not Found", "error");
        return navigate("/");
      }
      setdata(res.data);
      setToast(toast, "Hotels In This City Are Below", "success");
    } catch (error) {
      console.log(error);
      setToast(toast, error.data.message, "error");
      navigate("/");
    }
  }

  const hanldeChange = async (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "filters" && value === "lhr") {
      try {
        console.log("hi");
        let res = await axios.post(`https://cozytrip.up.railway.app/hotel/lhr`, {
          data: {
            city: cityname,
          },
        });
        setdata(res.data);
      } catch (error) {
        console.log("bye");
        console.log(error);
      }
    }
  };
  return (
    <>
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      gap={5}
      width={"90%"}
      m={"auto"}
      mt={5}
    >
      <Stack>
        <Select name={"filters"} onChange={hanldeChange} placeholder="Filters">
          <option value="lhr">Low To High Rating</option>
          <option value="hlr">High To Low Rating</option>
          <option value="lhp">Low To High Price</option>
          <option value="hlp">High To Low Price</option>
        </Select>
      </Stack>
      <Box display={"flex"} flexWrap={"wrap"} gap={5} width={"80%"} m={"auto"}>
        {data?.map((ele) => (
          <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image width={"100%"} src={ele.photos[0]} alt={ele.title} />

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
                  {Math.floor(Math.random() * 3) + 1} Availabe Rooms &bull;
                  {Math.floor(Math.random() * 3) + 1} baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {ele.title}
              </Box>

              <Box>
                {ele.cheapestPrice}
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
                      color={i < ele.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {ele.reviewCount} reviews
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
                  onClick={() =>
                    localStorage.setItem("abc", JSON.stringify(ele))
                  }
                >
                  Book Now
                </Button>
              </Link>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
    <AboutFooter />
    </>
  );
}

export default Hotels;
