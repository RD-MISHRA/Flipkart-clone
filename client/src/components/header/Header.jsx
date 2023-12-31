import { AppBar, Toolbar, styled, Box,Typography } from '@mui/material';
import Search from './Search'

import CustomButton from './CustomButtons';
const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height 5px;
  
`;
const Component=styled(Box)`
margin-left:12%;
line-height:0
`
const Subheading=styled(Typography)`
font-size:10px;
font-style:italic;

'`
const PlusImage=styled('img')(
    {
        width:12,
        height:10,
        marginLeft:4,
    }
)

const CustomButtonWrapper=styled(Box)`
margin:0  5% 0 auto;
`



const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyleHeader>
      <Toolbar style={{minHeight:55}}>
        <Component>
            <img src={logoURL} style={{width:75}}/>
            <Box style={{display:'flex'}}>
                <Subheading>Explore&nbsp;
                <Box component="span" style={{color:'yellow'}}>Plus</Box></Subheading>
                <PlusImage src={subURL} />
            </Box>
            {/* <PlusImage src={subURL}/> */}
        </Component>
        <Search/ >
        <CustomButtonWrapper> <CustomButton/></CustomButtonWrapper>
      </Toolbar>
   
    </StyleHeader>
  );
};

export default Header;
