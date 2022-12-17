import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Input,
  InputGroup, 
  InputLeftElement,
  SimpleGrid,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, Search2Icon } from '@chakra-ui/icons';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link as RouterLink} from "react-router-dom";


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <RouterLink to="/">
              <Box>
                <img
                  // src='https://www.canva.com/design/DAFUqd5imSs/fLPeiKfkjy1ythQ2fILu0A/view' 
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB+CAMAAAAtMWwIAAAAh1BMVEX///8AcuEAbuAAbOAAcOFtoeoAYt4AZd9Zl+gAauDV5PkAZ98AXt5ajebx9/72+v4wfuPj7fugvO8AWt3B1PXc6Prq8vwAV920zPPJ2falwvFWkee/z/PO3veXuO8zg+RpmOkyeOJIi+Z8qOt3n+mKsu5jnOmDpOpEfeNMguSHre1TiOWryPMIf1ZDAAAFxklEQVR4nO2bbXeiPBCGIYnEAPJigUVYFVTsLu3//30PiuRFQOnWxzY9c33E4ZzcTjLJTAbDAAAAAAAAAAAAAAAAAAAAAAAA+FmEabWfHWfVu/3VI/lHEpsT3rP14z2hjGGEMGaUHlfeM0b4YOa/3Asvuzum0dF1iClg1jbVT/IMd+NH85uGyYEw8wrkFOsnjfNhTBW8+tOTewKz92eN9EFMFJwiNKS3wd08bawPYZrg1ajexsnZ80b7ACYJ9stxvSYh8RPH+2kmCZ4Nrl/+Yuk/ccCfZYrgVSntRsSxKKVYVmzpNKknCPZrycGOWaerKMtdaZKTQCMXTxAcmsLBzv7ycB1ITibps4b7eSYITi2xXMXkDRfCx+z1OYN9BBMEH/mMRntp7oau+B/y5CmDfQQTBBMxo5X8onbEItYnd5og+FdngVWLkAoXR///SB/EfcE+F0yXyg/Jlrue/n7CUB/DfcHeS2dhqX70cvQjBQsPW+ru81MFizVM1cQoCfiUxj9pDRus04Vy5XnMgxYp9akDTBCcc5NyZFtCu7v1sG/DBMHv/KTFZtLjkAczEx+eMdTHMEFwLHIHJFZxuBVHS6RRuiQJzkO7xym39wuumKDOx1Egp0v6nCwlwSay+rgnm0jShq15FqVV6UopMtWprDVTUvke5GTjF3KFh1HLcuQHyNQoHZ4k2IidWzZUo2x4omA5Je7Bqq9V8EGmCTaWiIxY0FedJvRkwUbKBiu1yKr10jtZsBGbVt/JDGm1fk9MFmwY2V/MZM2YlXvN3GvcFYxk2yQrSkpP98Oo2ZtQsdGnsCM48vvhASyXqtZevNrM8u12d6wiW7+74ROeHcfhmeSM53sc39dvxn4QP0nC5I5KP2n+HD29q+Kn1WuRLxZ58ZqNprfrTWezifR2vz0rCWboxCkW71YDNv4mMNE5ZjVRC5Nypk/af42dv6g3osjNr0NwWDlUsSHOy1Grq2GOX/X7VUxWqll9FNCeTWOkU2bY4b+xoYMycWTFGRk8WhJ2u/fnOxIO9+c0OMJ99Wi65Ow0i9hePtrPgMwudGXumE0zrTU7X1Y3knt2ac6zb/S0NFZatWrFku8IPmW9SLQoIfd8haKWeExylRsTR6dJLarsJi7362Z2xpugneSMFO0NyrtS0sLBNjCVohbvg9AAWziL8Z033jmn1L64nKU8UaY1ibVP17EdLZVNqtSnTFuJsrRUewwDZgX86BiKVY7Y6vI0PEprX59CvMdXJzFlL6130nXgRro0k05We+F3dtAlUNv8/oBd9lyeGfIkUVrmSGkBEL0f+lymrfiYy3bLjYvFFTtPeFLtMcw0vC793Y0ZLdoZbQdtMsTBJOG3hHimvBxi/ncxXS7E37ngonWeHVydMUggrkWpGpuSnX4tD5kQ3D7oCW6W52hTyxxrJzjlgvMRD+NC6uK5bmrhgh1dBEddQCJv7YbTE8xqgwt2auVlqakFDRVIviNr3glN2ulqB1epcZMU82ZaslVfFlFam9bD+I3vw22S13iYECKLjuR+eMWRIq/sYrwGHPig3fMCjd/+NPz9y333FhoRT/6xLCwVeZZG7cOZWLKW5L4Nb81qpITiCwDnwBWn8mcBumzDTaQtxajNzSWvjQ88/LLV6RMAkSewRRup473UJk+CL1TwUSqR5hFsztJotcxFBQCfSx5r6SMPhMrdcR4oRQBXqzvT8rphhUoPaBt9K6XshTBWQjm795Xm9yK98U0SvWy8XnDjUpWYumQOF+qBAvvFdTwox3S8jOdok/131M5wwwp7E1muPeZjpFfNsqUa/JSSLuSs3s4HS/Gs1FDv4L0Rtmr19JTUVv+DaXeu522aYSybucndTBBGu/7pOD4SKT43RmSrS84wgJ8dtoSeYUFeDyuJq2KLWiMcLGrNonOPOEqz5XKZRuvxmwS/NcrSyNYmXwAAAAAAAAAAAAAAAAAAAAAAAAB+Pv8BQgpQu9KvAHIAAAAASUVORK5CYII=' 
                  alt='image'
                  width={60}
                />
              </Box>
            </RouterLink>
          </Box>
          <Box>
            <RouterLink to="/womensproducts">
              <Text>WOMEN</Text>
            </RouterLink>
            
          </Box>
          <Box>
            <RouterLink to="/mensproducts">
              <Text>MEN</Text>
            </RouterLink>
          </Box>
          <Box>
            <Stack spacing={3}>
                <InputGroup border={20} w='100%'>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<Search2Icon color='black.300' />}
                    
                  />
                  <Input type='text' placeholder='SEARCH PRODUCTS'  w={900} id="search" />
                </InputGroup>              
            </Stack>
          </Box>
          <Box>
            <Flex alignItems={'center'}>
              <RiShoppingCart2Fill size={25} />
              <RouterLink to="/login">
                <Button >Login</Button>
              </RouterLink>
              <RouterLink to="/register">
                <Button>Register</Button>
              </RouterLink>
              
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
