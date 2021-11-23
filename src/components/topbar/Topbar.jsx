import "./topbar.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function topbar({menuOpen , setMenuOpen}) {

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Intro.</a> 
                    <div className="itemContainer">
                        <PersonOutlineIcon className="icon"/>
                        <span>+91 9184132444</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutlineIcon className="icon"/>
                        <span>vivekint404@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamberger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
