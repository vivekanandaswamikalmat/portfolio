import "./menu.scss"

export default function Menulist({href , setMenuOpen, menuOpen}) {
    const str = href.charAt(1).toUpperCase() + href.slice(2);
    console.log(str)
    return (
        <div className="Menulist">
            <li>
                <a href={href} onClick={()=>(setMenuOpen(!menuOpen))}>{str}</a>
            </li>            
        </div>
    )
}
