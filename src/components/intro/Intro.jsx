import "./intro.scss"

export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="./assets/person.png" alt="person" className="person" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Vivek Kalmath</h1>
                    <h3><span>Developer</span></h3>
                </div>
                <a href="#portfolio"><img src="./assets/arrow.png" alt="arrow" /></a>
            </div>
        </div>
    )
}
