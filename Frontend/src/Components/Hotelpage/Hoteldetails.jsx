import { Box, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToast } from "../../Utils/extraFunctions";
import { HotelCard } from "./Hotelcard";

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
      let res = await axios.post(`http://localhost:8800/api/hotels`, {
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
  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={5}
        width={"80%"}
        m={"auto"}
        mt={5}
      >
        {data?.map((ele) => (
          <HotelCard
            imageUrl={ele.photos[0]}
            reviewCount={ele.reviewCount}
            rating={ele.rating}
            availaberooms={ele.numberrooms}
            formattedPrice={ele.cheapestPrice}
            title={ele.title}
            data={ele}
          />
        ))}
      </Box>
    </>
  );
}

export default Hotels;
