import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {hotelCrausel} from "./singleHotel.content"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// import required modules
import { Pagination,Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";

export default function HotelDetailsCrausel() {
  return (
    <Box w="500px" h="300px">
      <Swiper pagination={true} 
      
      modules={[Pagination,Navigation]} 
      navigation={{ clickable: true }}
      className="mySwiper">
        {hotelCrausel.map((item,i)=>(
          <SwiperSlide>
            <Image w="500px" h="299px" objectFit='cover' src={item} />
          </SwiperSlide>

        ))}
      </Swiper>
    </Box>
  );
}
