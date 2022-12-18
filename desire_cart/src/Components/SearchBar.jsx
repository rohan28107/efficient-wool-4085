import { Input,
    FormControl,
    InputGroup, 
    InputLeftElement,
    Stack,
    Center,
 } from "@chakra-ui/react"
import {Search2Icon } from '@chakra-ui/icons';

const SearchBar = ({ datas, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(datas)
        console.log(datas);
        const resultsArray = datas.filter(data => data.title.includes(e.target.value) || data.category.includes(e.target.value))

        setSearchResults(resultsArray)
    }


    return (

            <Center>
                <Stack spacing={3} w='50%'>
                    <FormControl className="search" onSubmit={handleSubmit} >                        
                        <InputGroup border={20} w='100%'>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Search2Icon color='black.300' />}
                        />
                        <Input 
                            className="search__input"
                            type='text' 
                            placeholder='SEARCH PRODUCTS'  
                            // w='50%' 
                            id="search" 
                            onChange={handleSearchChange} 
                            />
                        </InputGroup>              
                    </FormControl>
                </Stack>
            </Center>
    )
}
export default SearchBar