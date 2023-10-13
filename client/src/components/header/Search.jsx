import styled from "@emotion/styled";
import { InputBase ,Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchBox=styled(Box)`
background:white;
display:flex;

width:38%;
border-radius:2px;
margin-left:10px;
`
const InputSearchBase = styled(InputBase)`
font-size: unset;
  width: 100%;
  padding-left: 20px;
`
const WrapperBox=styled(Box)`
color:blue;
padding:5px;
display:flex;
`


const Search=()=>{
    return(
        <SearchBox>  <InputSearchBase placeholder="Search For Brands Products"/>
     <WrapperBox><SearchIcon/></WrapperBox>   </SearchBox>
       
    )
}
export default Search;