import { Box, Stack } from '@mui/material'
import NavLogo from '../../atoms/Navlogo'
import NavBtn from '../../atoms/NavBtn'
import { RiFilePaperLine } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { GrAnalytics } from "react-icons/gr";
const Navbar = () => {
  return (
    <Box sx={{ width:'15%', height:'100vh',  padding:'1rem',overflow:'hidden'}}>
        <NavLogo companyName="BitesManaged 🍕"/>
        <Box sx={{ marginTop:'2rem'}}>
        <Stack spacing={2} direction="column">
            <NavBtn title="POS" nav="/" icon={<PiNewspaperClippingLight />} />
            <NavBtn title="Products" nav="/inventory" icon={<IoCart />}/>
            <NavBtn title="Orders" nav="/orders" icon={<RiFilePaperLine />}/>
            <NavBtn title='Analytics' nav="/analytics" icon={<GrAnalytics />}/>
        </Stack>
        </Box>
    </Box>
  )
}

export default Navbar