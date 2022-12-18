import { useState } from "react";
import AllProductCard from "./AllProductCard";
import { SimpleGrid } from "@chakra-ui/react";


const ListPage = ({ searchResults }) => {      

    const results = searchResults.map(data => 
            <AllProductCard key={data.id} data={data} />
        )


    const content = results?.length ? results : <article><p>No Matching Product</p></article>


    return (
        // <main></main>
        <SimpleGrid columns={{sm: 2, md: 3, lg:4}}   gap={6}>
            {content}
            
        </SimpleGrid>
    )
}
export default ListPage