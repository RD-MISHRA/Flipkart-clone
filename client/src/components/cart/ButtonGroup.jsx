import { Button,ButtonGroup,Box,styled } from "@mui/material"



const Component=styled(ButtonGroup)`
  margin-top: 30px;
`;
const StyledButton=styled(Button)`
border-radius:50%;
`




const GroupedButton=()=>{


    return (


        <Component>

            <Button>-</Button>
            <Button>1</Button>
            <Button>+</Button>
        </Component>
    )
}


export default GroupedButton;