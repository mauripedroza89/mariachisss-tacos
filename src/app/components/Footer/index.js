import React from 'react';
import { Box, Stack, ButtonGroup, IconButton,Text, Avatar} from '@chakra-ui/react';
import { FaInstagram, FaFacebookF} from 'react-icons/fa';
import { SiGooglemaps } from "react-icons/si";
import logo from '../../assets/images/logo.png';


const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Avatar src={logo}/>
        <ButtonGroup variant="ghost" color="gray.600" >
    <IconButton as="a" href="https://www.facebook.com/pages/category/Food-Truck/Mariachisss-tacos-113314177519736/" aria-label="Facebook" icon={<FaFacebookF fontSize="20px" />} />
    <IconButton as="a" href="https://www.instagram.com/mariachisss_tacos" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
    <IconButton as="a" href="https://goo.gl/maps/ZaBmvsaUfmKPwNoF7" aria-label="Maps" icon={<SiGooglemaps fontSize="20px" />} />
  </ButtonGroup>
      </Stack>
      <Text fontSize="sm" >
    &copy; {new Date().getFullYear()} Mariachisss Tacos All rights reserved.
  </Text>
    </Stack>
  </Box>
)

export default Footer;
