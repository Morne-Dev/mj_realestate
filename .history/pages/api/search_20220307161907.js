import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, TextareaHTMLAttributes, Icon } from "@chakra-ui/react";
import { BsFilter } from "reacty-icons/bs";

const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex 
                cursor="pointer"
                bg="gray.100'" 
            >
                <Text>Search Property By Filters</Text>

            </Flex>
        </Box>
    )
}

export default Search;