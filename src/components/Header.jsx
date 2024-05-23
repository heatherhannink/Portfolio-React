import { Flex, chakra } from '@chakra-ui/react';
import Nav from './Nav';
import { Link as ReactRouterLink } from 'react-router-dom';
export const HeaderFlex = chakra(Flex, {
    baseStyle: {
      backgroundColor: '#F6E05E',
      padding: '15px',
      justifyContent: 'space-around',
      flexDirection: 'column',
      alignItems: 'center',
    }
  });
export const Header = () => {
    return (
        <HeaderFlex>
          <p >Heather Hannink</p>
          <Nav />
        </HeaderFlex>
    );
  };
  export default Header;