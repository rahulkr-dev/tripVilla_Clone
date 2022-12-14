import React from "react";
import {
  Text,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";
import LOGO from "../../Assects/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../../redux/authentication/auth.action";
import { setToast } from "../../Utils/extraFunctions";
import Cookies from "js-cookie";
import axios from "axios";

const Navbar = () => {
  const token = useSelector((state) => state.auth.data.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handlelogout = () => {
    let jwt = Cookies.get("jwttoken");
    try {
      let res = axios.post("http://localhost:8080/user/logout", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setToast(toast, res.data.message, "success");
      Cookies.remove("jwttoken");
      Cookies.remove("refreshtoken");
      Cookies.remove("userid");
      dispatch(logoutAPI());
      navigate("/");
    } catch (error) {
      Cookies.remove("jwttoken");
      Cookies.remove("refreshtoken");
      Cookies.remove("userid");
      dispatch(logoutAPI());
      navigate("/");
    }
  };
  return (
    <Flex
      bg="#262626"
      pr="3rem"
      justify="space-between"
      align="center"
      h="60px"
    >
      <Link to={"/"}>
        <Image
          mt="-0.2rem"
          overflow="hidden"
          borderRadius="full"
          boxSize="90px"
          src={LOGO}
          alt="The Cozy Trip"
        />
      </Link>
      <Flex color="white" gap="2rem">
        <Menu>
          <MenuButton>
            <CgProfile size="1.6rem" />
          </MenuButton>
          <MenuList color="#484848">
            {token ? (
              <Text
                cursor={"pointer"}
                textAlign={"center"}
                onClick={handlelogout}
              >
                Logout
              </Text>
            ) : (
              <VStack>
                {" "}
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  to="/login"
                >
                  <Text cursor={"pointer"}>Login</Text>
                </Link>
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  to="/signup"
                >
                  {" "}
                  <Text cursor={"pointer"}>SignUp</Text>
                </Link>
              </VStack>
            )}
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton>
            INR <ChevronDownIcon />
          </MenuButton>
          <MenuList color="#484848">
            <MenuItem>INR</MenuItem>
            <MenuItem>BAN</MenuItem>
            <MenuItem>EURO</MenuItem>
          </MenuList>
        </Menu>
        <Menu bg="#262626">
          <MenuButton>
            <HamburgerIcon />
          </MenuButton>
          <MenuList color="#484848">
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
