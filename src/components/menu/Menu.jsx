import './menu.scss'
import Menulist from './Menulist'

export default function Menu({menuOpen , setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <Menulist href={"#intro"} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>    
                <Menulist href={"#portfolio"} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>    
                <Menulist href={"#works"} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>    
                <Menulist href={"#testimonials"} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>    
                <Menulist href={"#contact"} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>       
            </ul>            
        </div>
    )
}
