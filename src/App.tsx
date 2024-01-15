import React from 'react';
import './App.css';

import OneSection from "./components/OneSection";
import TwoSection from "./components/TwoSection";
import ThreeSection from "./components/ThreeSection";
import FourSectionNames from "./components/FourSectionNames";

import firstPhoto from './assets/photos/bride.jpg';
import secondPhoto from './assets/photos/AM-501.jpg';
import HeadingSection from "./components/HeadingSection";
import SaveTheDateSection from "./components/SaveTheDateSection";
import FunctionCardComponent from "./components/FunctionCardComponent";
import GallerySection from "./components/GallerySection";
import {Helmet} from "react-helmet";

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
                        videoId="lNIEZ61PyG0"
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

                    <TwoSection/>
                </div>
                <div className="Row">
                    <ThreeSection/>
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

                <div className="Row">
                    <HeadingSection
                        title={"Theme of the day"}
                        subtitle={"Please come dressed in your best attire"}
                    />
                </div>

                <div className="Row">
                    <HeadingSection
                        title={"Functions"}

                    />
                </div>

                <div className="Row">
                    <FunctionCardComponent
                        title={"Mairie de Drancy"}
                        subtitle={"18 May 2024"}
                    />
                    <FunctionCardComponent
                        title={"Reception"}
                        subtitle={"18 May 2024"}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
