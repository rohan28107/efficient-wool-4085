import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const Cart = () => {
    return (
        <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Item Brought!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                Thanks for shopping from us. Our Team will contact you soon.
            </AlertDescription>
        </Alert>
    )
  }

  export default Cart;