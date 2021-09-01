import React from 'react';
import { Input,useColorModeValue,InputGroup,InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'



function SearchBar (props){

        return(
         
        <InputGroup>
        <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="black.300" />}
        />        
                <Input 
                onChange={props.handleChange}
                type="search"
                bg={useColorModeValue('orange.200', 'orange.900')} 
                variant="filled" 
                placeholder="Search product" />
        </InputGroup>
        )       
}

export default SearchBar;

