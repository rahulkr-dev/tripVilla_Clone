import { Grid, Heading,Image,Text,Box,Flex } from '@chakra-ui/react'
import React from 'react'

const MidSection1 = () => {
    return (
        <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}} gap="2rem">
            <Grid w="300px">
                <Heading>hkkljljl</Heading>
                <Grid border="1px solid green" templateColumns={{base:"repeat(2,1fr)",lg:"repeat(2,1fr)"}} gap="2rem" >
                    <Box  border="1px solid green" >
                        <Image
                            boxSize='40px'
                            objectFit='cover'
                            src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg'
                            alt='Dan Abramov'
                        />
                        <Text>High Quality</Text>
                        <Text>housekeeping</Text>
                    </Box>
                    <Box>
                        <Image
                            boxSize='40px'
                            objectFit='cover'
                            src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg'
                            alt='Dan Abramov'
                        />
                        <Text>Comfortable Linen and</Text>
                        <Text>Toiletries</Text>
                    </Box>
                    <Box>
                        <Image
                            boxSize='40px'
                            objectFit='cover'
                            src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg'
                            alt='Dan Abramov'
                        />
                        <Text>Quality Furniture &</Text>
                        <Text>Fittings</Text>
                    </Box>
                    <Box>
                        <Image
                            boxSize='40px'
                            objectFit='cover'
                            src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg'
                            alt='Dan Abramov'
                        />
                        <Text>Food Delivery Or</Text>
                        <Text>Central Restaurant</Text>
                    </Box>

                </Grid>
            </Grid>
            <Grid w="800px" border="1px solid black" templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
                <Box>
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <Text>Quality Furniture &</Text>
                        <Text>Fittings</Text>
                    </Box>
                </Box>
                <Box>
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <Text>Quality Furniture &</Text>
                        <Text>Fittings</Text>
                    </Box>
                </Box>
                <Box>
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <Text>Quality Furniture &</Text>
                        <Text>Fittings</Text>
                    </Box>
                </Box>
                <Box>
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <Text>Quality Furniture &</Text>
                        <Text>Fittings</Text>
                    </Box>
                </Box>
                <Box>
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <Text>Quality Furniture &</Text>
                        <Text>Fittings</Text>
                    </Box>
                </Box>
                <Box>
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <Text>Quality Furniture &</Text>
                        <Text>Fittings</Text>
                    </Box>
                </Box>
                <Box>
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <Text>Quality Furniture &</Text>
                        <Text>Fittings</Text>
                    </Box>
                </Box>
            </Grid>
            </Grid>
    )
}

export default MidSection1