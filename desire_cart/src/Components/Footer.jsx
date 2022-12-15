import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaGooglePlay, FaAppStore, FaAppStoreIos } from 'react-icons/fa';

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

export const Footer = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}
) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const LargeWithAppLinksAndSocial = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
                <Footer>Install Our App</Footer>
                {/* <Image src="data:image/png;base64,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"/>
                <Image src="data:image/png;base64,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"/> */}
                {/* <FaAppStoreIos w='150px' h='100px'/>
                
                <FaGooglePlay /> */}
                <Image w={150} src="data:image/png;base64,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" />
                <Image w={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGtZmcUsw-w7Rt44T_9Jd3btezwezsP8Tdw&usqp=CAU" />
            </Stack>

          <Stack align={'flex-start'}>
            <Footer>INTERNATIONAL</Footer>
            <Link href={'#'}>Lyst - AU</Link>
            <Link href={'#'}>Lyst - CA</Link>
            <Link href={'#'}>Lyst - UK</Link>
            <Link href={'#'}>Lyst - Österreich</Link>
            <Link href={'#'}>Lyst - Schweiz</Link>
            <Link href={'#'}>Lyst - Deutschland</Link>
            <Link href={'#'}>Lyst - España</Link>
            <Link href={'#'}>Lyst - France</Link>   
            <Link href={'#'}>Lyst - Italia</Link>
            <Link href={'#'}>Lyst - 日本</Link>
            <Link href={'#'}>Lyst - België</Link>
            <Link href={'#'}>Lyst - Nederland</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Footer>HELP AND INFO</Footer>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Intellectual property</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Categories</Link>
            <Link href={'#'}>Become a partner</Link>
            <Link href={'#'}>Lyst Insights</Link>
            <Link href={'#'}>Lyst News</Link>
          </Stack>
          
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>©  2022 Lyst</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'}  href={'https://twitter.com/lyst?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'} target="_blank">
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/c/LYST?app=desktop'} target="_blank">
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/lyst/?hl=en'} target="_blank">
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/Lyst/'} target="_blank">
              <FaFacebook />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}


// export default Footer;