import { Button } from "@mui/material"
import { useScroll } from "@react-three/drei"

const ContactCTA = () => {
    const data = useScroll()
    
    return(
        <a className="p-16">
              <Button 
              onClick={() => {data.el.scrollTop+=3700}}
              color="inherit" 
              size="large"    
              sx={{fontFamily: "monospace",fontSize: "18px", width: '200px', fontWeight:"bold", cursor:"crosshair"}} 
              variant="outlined">
              Contact Me! 
              </Button>
            </a>
    )
}

export default ContactCTA