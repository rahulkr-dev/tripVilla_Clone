import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading } from '@chakra-ui/react'

const HomeFooter = () => {
    return (
        <Box p="3rem">
            <Heading fontSize="25px" color="#333333" >Holiday Homes Across The Globe</Heading>
            <Tabs>
                <TabList>
                    <Tab>Asia</Tab>
                    <Tab>Europe</Tab>
                    <Tab>NorthAmerica</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default HomeFooter