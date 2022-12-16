import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Grid } from '@chakra-ui/react'
import list from "./content.json"
import TabPanelCountry from './TabPanelCountry'

const HomeFooter = () => {
    return (
        <Box p="3rem">
            <Heading m="1rem" fontSize="25px" color="#333333" >Holiday Homes Across The Globe</Heading>
            <Tabs>
                <TabList>
                    <Grid gridTemplateColumns={["repeat(3,1fr)","repeat(4,1fr)","repeat(6,1fr)"]}>
                        <Tab>ASIA</Tab>
                        <Tab>EUROPE</Tab>
                        <Tab>NORTH AMERICA</Tab>
                        <Tab>SOUTH AMERICA</Tab>
                        <Tab>AFRICA</Tab>
                        <Tab>OCEANIA</Tab>
                    </Grid>

                </TabList>

                <TabPanels>
                    <TabPanel>
                        <TabPanelCountry list={list.asia} />
                    </TabPanel>
                    <TabPanel>
                        <TabPanelCountry list={list.europe} />
                    </TabPanel>
                    <TabPanel>
                        <TabPanelCountry list={list.northamerica} />
                    </TabPanel>
                    <TabPanel>
                        <TabPanelCountry list={list.southamerica} />
                    </TabPanel>
                    <TabPanel>
                        <TabPanelCountry list={list.africa} />
                    </TabPanel>
                    <TabPanel>
                        <TabPanelCountry list={list.oceania} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default HomeFooter