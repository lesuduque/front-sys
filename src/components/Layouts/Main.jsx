import Footer from "../Helpers/Footer";
import Header from "../Helpers/Header";
import Login from "../Helpers/Login";

const Main = ()  =>{
    return (
            <main>
                <section className="header">
                    <Header/>
                    <Login/>
                    <Footer/>
                </section>


            </main>  
    )
}

export default Main;
