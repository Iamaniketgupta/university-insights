import { useState } from "react";
import NavBar from "../../components/common/NavBar";
import Features from "../../components/Features";
import Hero from "../../components/Home/Hero";
import ModalWrapper from "../../components/common/ModalWrapper";
import LoginType from "../../components/Auth/Login/LoginType";
import Login from "../Auth/Login";


function Home() {
    const [showLogin, setShowLogin] = useState(false);
    const [loginType, setLoginType] = useState(null);
 
    return (
        <div className="min-h-screen bg-stone-900">
            <NavBar setLoginType={setLoginType} setShowLogin={setShowLogin} />
            <Hero />
            <Features />

            {(showLogin && !loginType) ? <ModalWrapper open={showLogin} setOpenModal={setShowLogin} outsideClickClose={true} >

                <LoginType
                    setLoginType={setLoginType}
                    loginType={loginType} />
            </ModalWrapper>

                :
                <ModalWrapper open={showLogin} setOpenModal={setShowLogin} outsideClickClose={true} >

                    <Login loginType={loginType} />
                </ModalWrapper>
            }

        </div>
    );
}

export default Home;