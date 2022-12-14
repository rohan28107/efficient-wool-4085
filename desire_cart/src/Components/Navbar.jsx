// import { ReactNode } from 'react';
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
  InputLeftElement
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, Search2Icon } from '@chakra-ui/icons';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link as RouterLink} from "react-router-dom";

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <RouterLink to="/">
            <Box>
              <img
                // src='https://www.canva.com/design/DAFUqd5imSs/fLPeiKfkjy1ythQ2fILu0A/view' 
                src='data:image/png;base64,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' 
                alt='image'
                width={60}
              />
            </Box>
          </RouterLink>
          <RouterLink to="/womenpage">
            <Text>WOMEN</Text>
          </RouterLink>
          <RouterLink to="/menpage">
            <Text>MEN</Text>
          </RouterLink>
          
          <Stack spacing={3}>
          <InputGroup border={20}>
            <InputLeftElement
              pointerEvents='none'
              children={<Search2Icon color='black.300' />}
              
            />
            <Input type='tel' placeholder='SEARCH PRODUCTS' w={900} />
          </InputGroup>
          </Stack>
          
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
        </Flex>
      </Box>
    </>
  );
}













// import {
//     Box,
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     Stack,
//     Collapse,
//     Icon,
//     Link,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useBreakpointValue,
//     useDisclosure, 
//     ButtonProps,
//     useColorMode,
//     Image
//   } from '@chakra-ui/react';
//   import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
//   } from '@chakra-ui/icons';
//   import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
  
//   export default function WithSubnavigation() {
//     const { isOpen, onToggle } = useDisclosure();
//     const { colorMode, toggleColorMode } = useColorMode();

//     return (
//       <Box>
//         <Flex
//           bg={useColorModeValue('white', 'gray.800')}
//           color={useColorModeValue('gray.600', 'white')}
//           minH={'60px'}
//           py={{ base: 2 }}
//           px={{ base: 4 }}
//           borderBottom={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.900')}
//           align={'center'}>
//           <Flex
//             flex={{ base: 1, md: 'auto' }}
//             ml={{ base: -2 }}
//             display={{ base: 'flex', md: 'none' }}>
//             <IconButton
//               onClick={onToggle}
//               icon={
//                 isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//               }
//               variant={'ghost'}
//               aria-label={'Toggle Navigation'}
//             />
//           </Flex>
//           <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
//             <Text
//               textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
//               fontFamily={'heading'}
//               color={useColorModeValue('gray.800', 'white')}>
//               <Image src="https://drive.google.com/file/d/1LdiFcRXiQjtS7fqFfOelQAOOX3h0yHGf/view?usp=share_link" />
//             </Text>
  
//             <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
//               <DesktopNav />
//             </Flex>
//           </Flex>
  
//           <Stack
//             flex={{ base: 1, md: 0 }}
//             justify={'flex-end'}
//             direction={'row'}
//             spacing={6}>
//             <Button
//               as={'a'}
//               fontSize={'sm'}
//               fontWeight={400}
//               variant={'link'}
//               href={'#'}>
//               Sign In
//             </Button>
//             <Button
//               display={{ base: 'none', md: 'inline-flex' }}
//               fontSize={'sm'}
//               fontWeight={600}
//               color={'white'}
//               bg={'pink.400'}
//               href={'#'}
//               _hover={{
//                 bg: 'pink.300',
//               }}>
//               Sign Up
//             </Button>
//             <Button
//                 aria-label="Toggle Color Mode"
//                 onClick={toggleColorMode}
//                 _focus={{ boxShadow: 'none' }}
//                 w="fit-content"
//                 // {...props}
//                 >
//                 {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
//             </Button>
//           </Stack>
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity>
//           <MobileNav />
//         </Collapse>
//       </Box>
//     );
//   }
  
//   const DesktopNav = () => {
//     const linkColor = useColorModeValue('gray.600', 'gray.200');
//     const linkHoverColor = useColorModeValue('gray.800', 'white');
//     const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
//     return (
//       <Stack direction={'row'} spacing={4}>
//         {NAV_ITEMS.map((navItem) => (
//           <Box key={navItem.label}>
//             <Popover trigger={'hover'} placement={'bottom-start'}>
//               <PopoverTrigger>
//                 <Link
//                   p={2}
//                   href={navItem.href ?? '#'}
//                   fontSize={'sm'}
//                   fontWeight={500}
//                   color={linkColor}
//                   _hover={{
//                     textDecoration: 'none',
//                     color: linkHoverColor,
//                   }}>
//                   {navItem.label}
//                 </Link>
//               </PopoverTrigger>
  
//               {navItem.children && (
//                 <PopoverContent
//                   border={0}
//                   boxShadow={'xl'}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={'xl'}
//                   minW={'sm'}>
//                   <Stack>
//                     {navItem.children.map((child) => (
//                       <DesktopSubNav key={child.label} {...child} />
//                     ))}
//                   </Stack>
//                 </PopoverContent>
//               )}
//             </Popover>
//           </Box>
//         ))}
//       </Stack>
//     );
//   };
  
//   const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//       <Link
//         href={href}
//         role={'group'}
//         display={'block'}
//         p={2}
//         rounded={'md'}
//         _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//         <Stack direction={'row'} align={'center'}>
//           <Box>
//             <Text
//               transition={'all .3s ease'}
//               _groupHover={{ color: 'pink.400' }}
//               fontWeight={500}>
//               {label}
//             </Text>
//             <Text fontSize={'sm'}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={'all .3s ease'}
//             transform={'translateX(-10px)'}
//             opacity={0}
//             _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//             justify={'flex-end'}
//             align={'center'}
//             flex={1}>
//             <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Link>
//     );
//   };
  
//   const MobileNav = () => {
//     return (
//       <Stack
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         display={{ md: 'none' }}>
//         {NAV_ITEMS.map((navItem) => (
//           <MobileNavItem key={navItem.label} {...navItem} />
//         ))}
//       </Stack>
//     );
//   };
  
//   const MobileNavItem = ({ label, children, href }) => {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Stack spacing={4} onClick={children && onToggle}>
//         <Flex
//           py={2}
//           as={Link}
//           href={href ?? '#'}
//           justify={'space-between'}
//           align={'center'}
//           _hover={{
//             textDecoration: 'none',
//           }}>
//           <Text
//             fontWeight={600}
//             color={useColorModeValue('gray.600', 'gray.200')}>
//             {label}
//           </Text>
//           {children && (
//             <Icon
//               as={ChevronDownIcon}
//               transition={'all .25s ease-in-out'}
//               transform={isOpen ? 'rotate(180deg)' : ''}
//               w={6}
//               h={6}
//             />
//           )}
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//           <Stack
//             mt={2}
//             pl={4}
//             borderLeft={1}
//             borderStyle={'solid'}
//             borderColor={useColorModeValue('gray.200', 'gray.700')}
//             align={'start'}>
//             {children &&
//               children.map((child) => (
//                 <Link key={child.label} py={2} href={child.href}>
//                   {child.label}
//                 </Link>
//               ))}
//           </Stack>
//         </Collapse>
//       </Stack>
//     );
//   };
  
// //  NavItem {
// //     label: string;
// //     subLabel?: string;
// //     children?: Array<NavItem>;
// //     href?: string;
// //   }
  
//   const NAV_ITEMS= [
//     {
//       label: 'WOMEN',
//       children: [
//         {
//           label: 'Explore Design Work',
//           subLabel: 'Trending Design to inspire you',
//           href: '#',
//         },
//         {
//           label: 'New & Noteworthy',
//           subLabel: 'Up-and-coming Designers',
//           href: '#',
//         },
//       ],
//     },
//     {
//       label: 'MEN',
//       children: [
//         {
//           label: 'Job Board',
//           subLabel: 'Find your dream design job',
//           href: '#',
//         },
//         {
//           label: 'Freelance Projects',
//           subLabel: 'An exclusive list for contract work',
//           href: '#',
//         },
//       ],
//     },

//   ];