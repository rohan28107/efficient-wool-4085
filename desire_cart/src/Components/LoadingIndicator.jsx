import { Skeleton, SimpleGrid  } from '@chakra-ui/react'


function LoadingIndicator() {
    return <div data-testid="loading-indicator">
        <SimpleGrid columns={4}>
            <Skeleton height='200px' w='80%' />
            <Skeleton height='200px' w='80%' />
            <Skeleton height='200px' w='80%' />
            <Skeleton height='200px' w='80%' />
            <Skeleton height='200px' w='80%' />
            <Skeleton height='200px' w='80%' />
            <Skeleton height='200px' w='80%' />
            <Skeleton height='200px' w='80%' />
        </SimpleGrid>
    </div>;
  }
  
  export default LoadingIndicator;
  