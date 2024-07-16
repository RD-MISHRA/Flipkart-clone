

import { Box, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { navData } from '../../constants/data';

const Components = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '55px 130px 0px 155px',
  justifyContent: 'space-between',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    margin: 0
  }
}));

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
  
  img {
    width: 65px;
    transition: transform 0.3s ease-in-out; 
  }

  &:hover img {
    transform: scale(1.1); 
  }
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Box style={{ background: '#fff' }}>
      <Components>
        {navData.map((data) => (
          <Link
            key={data.text}
            to={`/${data.text}`} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Container>
              <img src={data.url} alt="nav" />
              <Text>{data.text}</Text>
            </Container>
          </Link>
        ))}
      </Components>
    </Box>
  );
};

export default NavBar;
