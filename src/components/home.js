import sport from "../images/sport.png"
import logo from "../images/logo.png"
import home from "../images/home.png"
export default function Home() {

    return (
        <>
            <div className="sportycode">
                <div className="sporty"><img src={sport} alt="" /></div>
                <div className="sportyy"><button><i className="fab fa-telegram" /></button></div>
                <div className="sportyy"><button><i className="fa fa-share" /></button></div>
            </div>
            <div className="sportycodeimg">
                    <button><img src={home} alt=""/></button>
                </div>
            <div className="flex-container">

                <button className="sportycover">
                    <div className="sportycoverimg"><img src={logo} width={100} alt="" /></div>
                    <div className="sportycovername">Free 2odds</div>
                </button>
                <button className="sportycover">
                    <div className="sportycoverimg"><img src={logo} width={100} alt="" /></div>
                    <div className="sportycovername">Accumulate TIPS</div>
                </button>
                <button className="sportycover">
                    <div className="sportycoverimg"><img src={logo} width={100} alt="" /></div>
                    <div className="sportycovername">Join Our Telegram</div>
                </button>
                <button className="sportycover">
                    <div className="sportycoverimg"><img src={logo} width={100} alt="" /></div>
                    <div className="sportycovername">About Us </div>
                </button>
            </div>


        </>
    )
}