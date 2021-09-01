import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,ArrowBackIcon } from '@chakra-ui/icons';
import logo from '../../assets/images/mariachis.png';
import logo2 from '../../assets/images/logo.png';
import {logoutWS} from '../../services/auth-endpoint';


function NavBar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('orange.100', 'orange.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Avatar
                  
                  src={logo2}
                /></Box>
            <HStack
              as={'nav'}
              spacing={40}
              display={{ base: 'none', md: 'flex' }}>
              <Link 
              onClick={()=>props.onFilter({food:true,drink:false,extra:false})}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('orange.200', 'orange.700'),
              }}
              >Food</Link>
              <Link 
              onClick={()=>props.onFilter({food:false,drink:true,extra:false})}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('orange.200', 'orange.700'),
              }}
              >Drinks</Link>
              <Link 
              onClick={()=>props.onFilter({food:false,drink:false,extra:true})}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('orange.200', 'orange.700'),
              }}
              >Extras</Link>
              <Link 
              onClick={()=>props.onFilter({food:true,drink:true,extra:true})}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('orange.200', 'orange.700'),
              }}
              >Show all</Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={logo}
                />
              </MenuButton>
              <MenuList>
                <MenuItem bg={useColorModeValue('orange.100', 'orange.900')}>
                    <Link rounded={'md'}
              _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('orange.200', 'orange.700'),
              }}
               href={'/addfood'}>Add new food</Link></MenuItem>
                <MenuDivider />
                <MenuItem bg={useColorModeValue('orange.100', 'orange.900')}>
                    <Link rounded={'md'}
              _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('orange.200', 'orange.700'),
              }}
               href={'/adddrink'}>Add new drinks</Link></MenuItem>
                <MenuDivider />
                <MenuItem bg={useColorModeValue('orange.100', 'orange.900')}>
                    <Link rounded={'md'}
              _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('orange.200', 'orange.700'),
              }}
               href={'/addextra'}>Add new extras</Link></MenuItem>
               <MenuItem bg={useColorModeValue('orange.100', 'orange.900')}>
                    <Link rounded={'md'}
              _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('orange.200', 'orange.700'),
              }}
               href={'/'}><ArrowBackIcon/>Logout</Link></MenuItem>
              </MenuList>
              
            </Menu>
          </Flex>
        </Flex>

        
      </Box>

    </>
  );
}

export default NavBar;