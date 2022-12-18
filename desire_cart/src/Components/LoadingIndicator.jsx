import { Skeleton, Stack, SimpleGrid  } from '@chakra-ui/react'


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
            {/* <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' /> */}
        </SimpleGrid>
    </div>;
  }
  
  export default LoadingIndicator;
  