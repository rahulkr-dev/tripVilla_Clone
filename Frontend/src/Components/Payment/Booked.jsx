import React from 'react'
// import "./Booked.css"
import {
  List,
  Center,
  ListItem,
  Box,
  UnorderedList,
 Text,
 Image,
Input,
  FormControl,
  FormLabel,
  Button,
  Alert,
  AlertTitle,
  AlertIcon


} from '@chakra-ui/react'
import { DragHandleIcon } from '@chakra-ui/icons'
import {useState} from "react"

     
function Booked() {
  const handleOtp=()=>{
    
    alert("OTP has already sent to your mobile No.")
  }
 const [formstate,formSetstate] = useState({
mobileNo:"",
otp:"",
fName:"",
lName:""
 })
  


  const handleChange=(e)=>{
   const name = e.target.name;
   const value= e.target.value;
   console.log(name,value);

   formSetstate({...formstate,[name]:value})
   
  }
  const handleSubmit=(e)=>{
e.preventDefault()
if(formstate.fName===""&& formstate.lName===""&&formstate.otp===""&&formstate.mobileNo==="")alert("First Fill complete Details ")
else alert(`${formstate.fName},Your Room has booked`)

  }
  return (
    <>
  
    <Box 
    // border={"1px solid black"} 
        display={"flex"} 
        height={"700px"}
        width={"90%"} 
        margin={"auto"} 
        marginTop={"90px"} 
        gap={"60px"}>
          <Box>
          <Box 
   
    margin={"10px"} 
   
    backgroundColor={"#1E87F0"}
    height={"260px"}
    width={"87%"}
    color={"white"}>
      <Text fontSize={25}
      marginLeft={"20px"}
      marginTop={"30px"}>
      Book Tension Free
    </Text >
     
      <UnorderedList 
       marginLeft={"50px"}
      >
  <ListItem
  padding={"9px"}
  marginTop={"10px"}
  
  fontSize={"18px"}
  fontWeight={"700"}
  >Your payments are secured by Tripvillas.</ListItem>
  <ListItem
  padding={"9px"}
  
  fontSize={"18px"}
  fontWeight={"700"}
  >
  The amounts are released to verified owners in advance while new owners are paid post your check-in and confirmation.

  </ListItem>
  <ListItem
  padding={"7px"}
  
  fontSize={"18px"}
  fontWeight={"700"}
  >
  You can contact us if you face any issues during checkin or your stay.
</ListItem>
</UnorderedList>
       

      </Box >
      
      
      <Box
      width={"87%"}
      height={"190px"}
      display={"flex"}
      marginLeft={"12px"}
      marginTop={"20px"}
      gap={"20px"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      
      >
        <Box
       
        
        > 
        <Image
        // data for image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPK2_X1S8LFZqUaKGuS6Gq9ziES69pzt64oQFA05H3rQ&s"
        width={"400px"}
        height={"190px"}
        /></Box>
        <Box  >
         {/* details of villa */}
         <Text fontSize={"25px"} padding={"10px"}>Villa ON the hill on Candolim</Text>
         <Text color={"grey"} padding={"10px"}>Candolim,Goa,INDIA</Text>
         <Text color={"grey"} padding={"10px"}>Villa | Accomodates max 11 guests | 4 Bedeooms | 4 Bathrooms</Text>
       
        </Box>
        </Box> 

        <Box 
             display={"flex"}
             marginTop={"20px"}
             marginLeft={"13px"}
             justifyContent={"space-between"} 
             width={"87%"}
              
              >
          <Box 
             boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          padding={"15px"}   >
            <Text fontSize={"20px"}>30-dec-2022
            </Text>
            <Text color={"grey"} padding={"10px"}> Check In </Text>
          </Box>
          <Box 
             boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}padding={"15px"}
             >  <Text fontSize={"20px"}>30-dec-2022
            </Text>
            <Text color={"grey"} padding={"10px"}> Check In </Text></Box>
          <Box 
             boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        padding={"15px"}     >
          <Text fontSize={"20px"}>30-dec-2022
            </Text>
            <Text color={"grey"} padding={"10px"}> Check In </Text>
          </Box>
          <Box 
             boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        padding={"15px"}     >
          <Text fontSize={"20px"}>30-dec-2022
            </Text>
            <Text color={"grey"} padding={"10px"}> Check In </Text>
          </Box>
        </Box>
        <Text  fontSize={"18px"} fontWeight={"600"} padding={"10px"} marginLeft={"10px"}
        color={"grey"}
        
        >Sub Total...................................................................................................................................₹9742.00</Text>
        <Text  fontSize={"18px"} fontWeight={"600"} padding={"10px"}marginLeft={"10px"}
        color={"grey"}
        
        >Discount.............................................................................................................................................................₹0</Text>
        <Text  fontSize={"18px"} fontWeight={"600"} padding={"10px"} marginLeft={"10px"}
        color={"grey"}
        >Tax............................................................................................................................................................₹42.00</Text>
        <Text  fontSize={"18px"} fontWeight={"600"} padding={"10px"} marginLeft={"10px"} color={"grey"}
        
        >Total...........................................................................................................................................................₹9742.00</Text>
          


    
    

     

      
          
          
          
          
          
          
          
          </Box>
          <Box   
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          marginLeft={"-70px"} width={"90%"}
          marginTop={"30px"} height={"990px"}
          display={"grid"}>
          <Box>
          
          <Text fontSize={"20px"} color={"grey"}
            marginTop={"20px"}
            marginLeft={"20px"}
            >Enter Your Contact Information</Text>
          <FormControl width={"90%"} margin={"auto"} 
           boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} 
           padding={"20px"}
           marginTop={"20px"}
           action=""
           onSubmit={handleSubmit}>
          
          <FormLabel>Mobile No.</FormLabel>
          <Input 
          
          value={formstate.mobileNo}type='Number'
         name="mobileNo"
         id="mobileNo"
          onChange={handleChange}  />
           <Button onClick={handleOtp}>Send OTP</Button>
          <FormLabel>OTP</FormLabel>
          <Input 
          
          value={formstate.otp}type='Number' 
          onChange={handleChange} 
          name="otp"
          id="otp"/>
         
          
          <FormLabel> First Name</FormLabel>
          <Input 
          
          value={formstate.fName}type='Text'
          onChange={handleChange} 
          name="fName"
          id="fName" />
          
          <FormLabel>Last Name</FormLabel>
          <Input 
          
          value={formstate.lName}type='Text'
          onChange={handleChange}
          name="lName"
          id="lName" />

  <Center
        backgroundColor={"#EE395B"}
        padding={"20px"}
        paddingLeft={"50px"}
        color={"white"}
        display={"block"}
        onClick={handleSubmit}
       type="submit"
        fontSize={"20px"}
        alignItem={"center"}
        width={"200px"}
        >Pay 9745</Center>
 
</FormControl>

            </Box>

            <Box  width={"90%"} margin={"auto"}
            marginTop={"-230px"} 
      height={"300px"}>
        <Text  borderBottom={"1px solid grey"}
        fontWeight={"bold"}
        fontSize={"19px"}
        padding={"10px"}>Booking Options</Text>
        <hr/>
        <Box border={"3px solid #1E87F0"}
        padding={"20px"}
        marginTop={"20px"}>
          
<Text  marginLeft={"15px"}fontSize={"22px"}>Pay ₹1 Now.</Text>
<Text padding={"10px"} marginLeft={"15px"} color={"grey"} fontWeight={"700"}>Pay the rest using a payment link only when home owner/manager accepts the booking.</Text>
<Text marginLeft={"15px"} color={"#C3C3C3"} fontWeight={"700"}>If owner declines the booking, ₹1 will be refunded back to you.
Pay using 100+ payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc.</Text>


        </Box>

       

      </Box>
            
    
   
     

      </Box>
      
      
      </Box>
      
   
    </>
  )
}

export default Booked
