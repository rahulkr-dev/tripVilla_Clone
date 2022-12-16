
import { Grid } from '@chakra-ui/react'
import React from 'react'
import {homeOwner,homeInv} from "./demoData"
import MidSection2Card from './MidSection2Card'
const MidSection2 = () => {
  return (
    <Grid  gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} gap="3rem" >
      <MidSection2Card head="Holiday Home Investment Opportunities"
      arr={homeInv} btn="EXPLORE INVESTEMENT OPPORTUNITES"
      />
      <MidSection2Card head="Are You A Holiday Home Owner or Manager?"
      arr={homeOwner} btn="LIST YOUR PROPERTY"
      />
    </Grid>
  )
}

export default MidSection2