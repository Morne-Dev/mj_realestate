import { useEffect, useState} from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button }  from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {MdCancel} from 'react-icons/md';
import Image from 'next/image';

const SearchFilters = () => {
    const [filters, setFilters] = useState({});

    
    return (
        <Flex bg="gary.100" p="4" justifyContent="center" flexWerap="wrap">
            
        </Flex>
    )
}

export default SearchFilters;