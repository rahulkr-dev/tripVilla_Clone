import { Box, Text, Grid, Heading, SimpleGrid, Center } from '@chakra-ui/react';
import React from 'react'
import AboutFooter from '../Components/Utils/AboutFooter';
const head = `Why should you make sure that you always book through Tripvillas.com and not directly with the owner?`
const Faq = () => {
  return (
    <>
      <Box mt="1rem" p={['1rem', '2rem', '4rem']} >
        <Heading fontSize="4rem" mb="2rem" color="#565656" >Frequenty Asked Questions</Heading>

        <Text color="#737373" fontSize="18px" >{head}</Text>
        <Text color="#737373" fontSize="18px" >Your credit card information is safe and never shared with the owners of properties.</Text>
        <Text color="#737373" fontSize="18px" >You benefit from our intervention in case the property owner has misrepresented the facts or anything goes wrong during your travel.</Text>
        <Text color="#737373" fontSize="18px" >You benefit from our refund policy in case you decide to change your mind.</Text>
        <Text color="#737373" fontSize="18px" >You need to have at least 100USD in your account before you request for payout. On being eligible for payout, you can empty your account.</Text>
        <Box  >
          <Text color="#565656" m="1rem 0" fontWeight="bold" fontSize="24px" >How do I cancel my booking?</Text>
          <Text color="#737373" fontSize="18px" >Please contact our team at support@tripvillas.com if you want to cancel your booking and they will assist you.</Text>
        </Box>
        <Box  >
          <Text color="#565656" m="1rem 0" fontWeight="bold" fontSize="24px" >What is the cancellation policy?</Text>
          <Text color="#737373" fontSize="18px" >Cancellations done 90 Days before the check-in date receive 50% of the booking amount minus a 200USD processing fee.

            Cancellations done less than 90 days before the check-in date are not eligible for any refunds.

            Please note that our properties are private holiday homes and not Hotels with dedicated marketing teams. It is not possible for the owners to accommodate cancellations especially due to the seasonal nature of travel.</Text>
        </Box>
        <Box  >
          <Text color="#565656" m="1rem 0" fontWeight="bold" fontSize="24px" >What happens with my money?</Text>
          <Text color="#737373" fontSize="18px" >For all bookings made on our website www.tripvillas.com, as soon as your payment has been received you will be able to access your voucher. Please note that you are not protected if you pay any of the owners directly or outside our system.</Text>
          <Text color="#737373" fontSize="18px" >As soon as your payment has been received you will be able to access your voucher.</Text>
          <Text color="#737373" fontSize="18px" >All funds are initially transferred to Tripvillas' escrow service.</Text>
          <Text color="#737373" fontSize="18px" >If you notice any problems with your booking within 48 hours of arriving at the property, inform us immediately and we will freeze the funds. Otherwise, the funds are released to the owner's account.</Text>
          <Text color="#737373" fontSize="18px" >In case of a dispute, our customer support team will get in touch with the traveler and the owner to resolve the issue.</Text>
        </Box>


      </Box>
      <AboutFooter />
    </>
  )
}

export default Faq