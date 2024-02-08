import React from 'react';
import './App.css';

import OneSection from "./components/OneSection";
import TwoSection from "./components/TwoSection";
import FourSectionNames from "./components/FourSectionNames";

import firstPhoto from './assets/photos/bride.jpg';
import secondPhoto from './assets/photos/AM-501.jpg';
import HeadingSection from "./components/HeadingSection";
import SaveTheDateSection from "./components/SaveTheDateSection";
import FunctionCardComponent from "./components/FunctionCardComponent";
import GallerySection from "./components/GallerySection";
import {Helmet} from "react-helmet";
import ThemeSection from "./components/ThemeSection";
import drancyMary from "./assets/photos/drancyMary.jpeg";
import sallePhoto from "./assets/photos/salle.jpeg";
import underline from "./assets/gallery/tittle_img.png";

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Prash Elsa Wedding</title>
                <meta name="description" content="Prash Elsa Wedding"/>
                <meta name="og:description" content="Prash Elsa Wedding"/>
                <meta name="og:title" content="Prash Elsa Wedding"/>
                <meta name="og:image" content={"src/assets/photos/IMG-20231224-WA0014.jpg"}/>
                <meta name="keywords" content="Prash Elsa Wedding"/>
                <meta name="author" content="Puvistyne"/>
            </Helmet>
            <div className="" style={{
                //backgroundColor: '#fff7f3',
            }}>

                <div className="Row">

                    <OneSection
                        videoId="RTAnY89maLU"
                        heading="Prash & Elsa"
                        description="We are getting married!"
                        footer={"Save the date    -    18 May 2024"}
                    />

                </div>
                <div className="Row">
                    <SaveTheDateSection
                        targetDate="2024-05-18"
                    />


                </div>
                <div className="Row">
                    zegze zpeigpzje g
                    zegze
                    g
                    ze

                    <audio autoPlay={true} loop>
                        <source src="./assets/video/Interlude%20Love%20vs%20Bad.mp3" type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                    <audio id="backgroundMusic" loop autoPlay>
                        <source src="./assets/video/Interlude%20Love%20vs%20Bad.mp3" type="audio/mp3"/>
                        Your browser does not support the audio element.
                    </audio>

                </div>
                <div className="Row">

                    <TwoSection/>
                </div>
                {/*<div className="Row">*/}
                {/*    <ThreeSection/>*/}
                {/*</div>*/}

                <div className="Row">
                    <HeadingSection
                        title={"Nous"}
                        subtitle={"A new chapter begins..."}
                    />
                </div>
                <div className="Row">
                    <FourSectionNames
                        first="Mr.Prash Ragavan"
                        firstPhoto={firstPhoto}
                        second="Ms.Elsa Benserade"
                        secondPhoto={secondPhoto}
                    />
                </div>

                <div className="Row">
                    <HeadingSection
                        title={"Nous"}
                        subtitle={"A new chapter begins..."}
                    />
                </div>

                <div className="Row">
                    <GallerySection/>
                </div>

                {/*<div className="Row">*/}
                {/*    <HeadingSection*/}
                {/*        title={"Theme of the day"}*/}
                {/*        subtitle={"Reception - pastel"}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div className="Row">*/}
                {/*    <ThemeSection/>*/}
                {/*</div>*/}

                <div className="Row">
                    <HeadingSection
                        title={"Functions"}

                    />
                </div>

                <div className="Row">
                    <FunctionCardComponent
                        title={"Mairie de Drancy"}
                        subtitle={"18 May 2024"}
                        other={"point de départ : 97 avenue joffre 93700 Drancy à 12H00"}
                        mapLink={"https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66cbc979f09a9:0x7a7398447e630999?sa=X&ved=2ahUKEwi-sKK9sfuDAxWkTKQEHW6CCcIQ4kB6BAhAEAA&hl=en"}
                        mapLinkText={"Mairie de Drancy"}
                        tail={"RDV sur place à 13H00"}
                        photoSource={drancyMary}
                        backgroundColor={'#d6f5fc'}
                    />
                </div>
                <div className="Row">
                    <img src={underline} alt=""
                         className="img-fluid p-3 m-2"
                         style={{
                             width: '100%',
                             // marginTop: '5%',
                             // marginBottom: '5%',
                         }}
                    />
                </div>
                <div className="Row">
                    <FunctionCardComponent
                        title={"Reception"}
                        subtitle={"18 May 2024"}
                        cocktailText={"vin d'honneur à partir de 18h"}
                        mapLink={"https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66cbc979f09a9:0x7a7398447e630999?sa=X&ved=2ahUKEwi-sKK9sfuDAxWkTKQEHW6CCcIQ4kB6BAhAEAA&hl=en"}
                        mapLinkText={"Salle aux Tulipes"}
                        photoSource={sallePhoto}
                        // tail={"Mairie de Drancy"}
                    />
                </div>

                <div className="Row">
                    <HeadingSection
                        title={"Theme of the day"}
                        subtitle={"Reception - pastel"}
                    />
                </div>
                <div className="Row">
                    <ThemeSection/>
                </div>
            </div>
        </div>
    );
}

export default App;
