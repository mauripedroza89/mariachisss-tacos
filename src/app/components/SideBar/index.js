import React, { useState } from 'react'
import {
    Flex,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Link
} from '@chakra-ui/react'
import {
    FcHome,
    FcShop
} from 'react-icons/fc';
import { IoFastFoodOutline,IoLogOut } from "react-icons/io5";
import { GiAvocado,GiDrinking,GiHamburgerMenu } from "react-icons/gi";
import NavItem from '../NavItem';
import logo from '../../assets/images/mariachis.png';

function Sidebar() {
    const [navSize, changeNavSize] = useState("large")

    
    return (
        <Flex
            pos="sticky"
            left="0"
            h="100vh"
            marginTop="0.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "10px" : "10px"}
            w={navSize === "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            backgroundColor={"#ffba70"}

        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<GiHamburgerMenu />}
                    onClick={() => {
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <Link rounded={'md'}
              _hover={{
              textDecoration: 'none',
              }}
               href={'/dashboard'}><NavItem navSize={navSize} icon={FcHome} title="Dashboard" description="Lets make an order!"/>
                </Link>
                <Link rounded={'md'}
              _hover={{
              textDecoration: 'none',
              }}
               href={'/orderrecord'}> <NavItem navSize={navSize} icon={FcShop} title="Order record" active />
               </Link>
                <Link rounded={'md'}
              _hover={{
              textDecoration: 'none',
              }}
               href={'/addfood'}><NavItem navSize={navSize} icon={IoFastFoodOutline} title="Add new food" />
               </Link>
               <Link rounded={'md'}
              _hover={{
              textDecoration: 'none',
              }}
               href={'/adddrink'}><NavItem navSize={navSize} icon={GiDrinking} title="Add new drinks" />
               </Link> 
               <Link rounded={'md'}
              _hover={{
              textDecoration: 'none',
              }}
               href={'/addextra'}><NavItem navSize={navSize} icon={GiAvocado} title="Add new extra" />
                </Link>
                <Link rounded={'md'}
              _hover={{
              textDecoration: 'none',
              }}
               href={'/'}>
                <NavItem navSize={navSize} icon={IoLogOut} title="Logout" /></Link>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src={logo} />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Mariachisss Tacos</Heading>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Sidebar;