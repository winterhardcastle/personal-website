import { useScroll } from "@react-three/drei"
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

const ScrollToHome = () => {
    const data = useScroll()

    return(
        <a className="z-10 border-1 rounded-lg bottom-8 right-8 fixed">
            <VerticalAlignTopIcon onClick={() => {data.el.scrollTop = 0}} fontSize="large" />
        </a>
    )
}

export default ScrollToHome