import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginAPI,
  refreshCheck,
  resetpassword,
} from "../../redux/authentication/auth.action";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function LoginCard() {
  const [signUpcreds, setsignUpcreds] = useState({});
  const [reset, setreset] = useState(false);
  const [resetemail, setresetemail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    let refreshtoken = Cookies.get("refreshtoken");
    if (refreshtoken) {
      dispatch(refreshCheck(navigate));
    }
  }, []);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setsignUpcreds({
      ...signUpcreds,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    dispatch(loginAPI(signUpcreds, toast, navigate));
  };

  const handleSubmitreset = () => {
    dispatch(resetpassword(resetemail, toast, navigate));
  };

  let color = useColorModeValue("white", "gray.700");

  return (
    <>
      <Flex
        minH={"92.5vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        {reset ? (
          <Stack spacing={5} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"} spacing={2}>
              <Heading fontSize={"4xl"}>Enter Your Email</Heading>
              <Text color={"gray.600"} fontSize={"lg"}>
                OTP Will Be sent To Your Email.
              </Text>
              <Text color={"gray.600"} fontSize={"lg"}>
                For Reseting Your Password.
              </Text>
            </Stack>
            <Box rounded={"lg"} bg={color} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <Text fontSize={"md"} fontWeight="bold">
                  Email Address
                </Text>
                <Input
                  type="email"
                  value={resetemail}
                  onChange={(e) => setresetemail(e.target.value)}
                  variant={"filled"}
                  placeholder="Enter your email address"
                />
                <Stack spacing={2}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleSubmitreset}
                  >
                    Submit
                  </Button>
                  <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    Return To{" "}
                    <Text
                      ml={1}
                      textDecorationLine={"underline"}
                      color={"blue.400"}
                      cursor={"pointer"}
                      onClick={() => setreset(false)}
                    >
                      Login
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        ) : (
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Login to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool <Link color={"blue.400"}>Places</Link>{" "}
                ✌️
              </Text>
            </Stack>
            <Box rounded={"lg"} bg={color} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input name="email" type="email" onChange={hanldeChange} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    name="password"
                    onChange={hanldeChange}
                    type="password"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Text
                      onClick={() => setreset(true)}
                      cursor={"pointer"}
                      color={"blue.400"}
                    >
                      Forgot password?
                    </Text>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        )}
      </Flex>
    </>
  );
}
