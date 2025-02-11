import { Box, Typography } from '@mui/material'
type HeaderProps = {
    companyName: string,
}

const NavLogo = ({companyName}: HeaderProps) => {
  return (
    <Box sx={{ backgroundColor:'white', borderRadius: 4, padding:'0.5rem', overflow:'hidden', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset'}}>
        <Typography variant="h6" sx={{fontWeight: 700, color:'#3b4966', fontFamily:'fantasy' }}>{companyName}</Typography>
    </Box>
  )
}

export default NavLogo