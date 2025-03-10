import React from 'react';
import './App.css';

import OneSection from "./components/OneSection";
import TwoSection from "./components/TwoSection";
import FourSectionNames from "./components/FourSectionNames";

import firstPhoto from './assets/photos/bride.jpeg';
import secondPhoto from './assets/photos/groom.jpg';
import HeadingSection from "./components/HeadingSection";
import SaveTheDateSection from "./components/SaveTheDateSection";
import PhotoCardComponent from "./components/PhotoCardComponent";
import GallerySection from "./components/GallerySection";
import {Helmet} from "react-helmet";
import Footer from "./components/Footer";
import backPhoto from "./assets/gallery/section_bg1.png";
import card from "./assets/photos/card.jpg";
import card1 from "./assets/photos/card1.jpg";
import card2 from "./assets/photos/card2.jpg";
import MapComponent from './components/MapComponent';

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Kevin Hoshnar Sayanthini Wedding</title>
                <meta name="description" content="Kevin Hoshnar Sayanthini Wedding"/>
                <meta name="og:description" content="Kevin Hoshnar Sayanthini Wedding"/>
                <meta name="og:title" content="Kevin Hoshnar Sayanthini Wedding"/>
                <meta name="og:image" content={"src/assets/photos/IMG-20231224-WA0014.jpg"}/>
                <meta name="keywords" content="Kevin Hoshnar Sayanthini Wedding"/>
                <meta name="author" content="Puvistyne"/>
            </Helmet>
            <div
                style={{
                    backgroundImage: `url(${backPhoto})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'repeat-y',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    filter: 'brightness(1.1) contrast(1.05)', // Slightly increase brightness and contrast
                }}
            >
                <div className="Row">

                    <OneSection
                        videoId="Y8sJKB29PKg"
                        heading="Kevin & Sayanthini"
                        description="We are getting married!"
                        footer={"Save the date    -    27 June 2025"}
                    />

                </div>
                {/*<div className="Row">*/}
                {/*    <HeadingSection*/}
                {/*        title={"Save the Date"}*/}
                {/*        subtitle={"18 May 2024"}*/}

                {/*    />*/}
                {/*</div>*/}
                <div className="Row">
                    <SaveTheDateSection
                        targetDate="2025-06-27"
                    />



                </div>
                {/*<div className="Row">*/}
                {/*    zegze zpeigpzje g*/}
                {/*    zegze*/}
                {/*    g*/}
                {/*    ze*/}


                {/*    <iframe width="200" height="200" src="https://www.youtube.com/embed/UjUQgKVME-Q"*/}
                {/*            title="Apple Vision Pro vs Meta Quest 3: Which is the better Value?" frameBorder="0"*/}
                {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                {/*            allowFullScreen></iframe>*/}
                {/*    <iframe width="100" height="100" src="https://www.youtube.com/embed/RTAnY89maLU"*/}
                {/*            title="8 février 2024" frameBorder="0"*/}
                {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                {/*            allowFullScreen></iframe>*/}
                {/*    <audio autoPlay={true} loop>*/}
                {/*        <source src={backMusic} type="audio/mpeg"/>*/}
                {/*        Your browser does not support the audio element.*/}
                {/*    </audio>*/}
                {/*    <audio id="backgroundMusic" loop autoPlay>*/}
                {/*        <source src="assets/videos/music.mp3" type="audio/mp3"/>*/}
                {/*        Your browser does not support the audio element.*/}
                {/*    </audio>*/}

                {/*</div>*/}
                <div className="Row">

                    <TwoSection/>
                </div>
                {/*<div className="Row">*/}
                {/*    <ThreeSection/>*/}
                {/*</div>*/}

                <div className="Row">
                    <HeadingSection
                        title={"A new chapter begins..."}
                        // subtitle={"A new chapter begins..."}
                    />
                </div>
                <div className="Row">
                    <FourSectionNames
                        first="Mr.Kevin Hoshnar"
                        firstPhoto={firstPhoto}
                        second="Ms.Sayanthini"
                        secondPhoto={secondPhoto}
                    />
                </div>

                {/*<div className="Row">*/}
                {/*    <HeadingSection*/}
                {/*        // title={"Nous"}*/}
                {/*        title={"A new chapter begins..."}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="Row">
                    <HeadingSection
                        title={"அன்பிற்கும் உண்டோ அடைக்குந்தாழ்"}
                        fontFamily={"Baloo Thambi 2 sans-serif rounded"}

                        fontSize={"1.5rem"}
                        // subtitle={"A new chapter begins..."}
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

                {/*<div className="Row">*/}
                {/*    <HeadingSection*/}
                {/*        title={"Functions"}*/}

                {/*    />*/}
                {/*</div>*/}
                <div className="Row">
                    {/*<div className="col-12 m-2 position-relative">*/}
                    {/*    /!* Wrapper div for the background image *!/*/}
                    {/*    <div*/}
                    {/*        style={{*/}
                    {/*            backgroundImage: `url(${drancyMaryInvitation})`,*/}
                    {/*            backgroundSize: 'contain', // Scale image to fit container while preserving aspect ratio*/}
                    {/*            backgroundRepeat: 'no-repeat',*/}
                    {/*            backgroundPosition: 'center', // Center the image*/}
                    {/*            minHeight: '80vh',*/}
                    {/*            borderRadius: '1rem',*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        /!* Link positioned at the bottom-right corner *!/*/}
                    {/*        <a*/}
                    {/*            href={"https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66cbc979f09a9:0x7a7398447e630999?sa=X&ved=2ahUKEwi-sKK9sfuDAxWkTKQEHW6CCcIQ4kB6BAhAEAA&hl=en"}*/}
                    {/*            target="_blank"*/}
                    {/*            rel="noreferrer"*/}
                    {/*            style={{*/}
                    {/*                position: 'absolute',*/}
                    {/*                bottom: '20px',*/}
                    {/*                right: '20px',*/}
                    {/*                color: '#ffffff', // Link color*/}
                    {/*                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background*/}
                    {/*                padding: '8px 16px', // Padding around the link*/}
                    {/*                borderRadius: '4px', // Rounded corners*/}
                    {/*                textDecoration: 'none', // Remove underline*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            {"mapLinkText"}*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>


                {/* <div className="Row">
                    <PhotoCardComponent
                        mapLink={"https://www.google.com/maps/place/Town+of+Blanc-Mesnil/@48.9387543,2.4635482,18.65z/data=!4m6!3m5!1s0x47e6135a25ec43b1:0x894284efc436966!8m2!3d48.938859!4d2.46406!16s%2Fg%2F1tcy3lyv?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"}
                        mapLinkText={"Mairie de Blanc Mesnil"}
                        photoSource={drancyMaryInvitation}
                    />
                </div> */}
                <div className="Row">
                    <PhotoCardComponent
                        photoSource={card}
                    />
                </div>

                {/* <div className="Row">
                    <PhotoCardComponent
                        mapLink={"https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e60adcec7965c1:0xc27adb90a9518767?sa=X&ved=2ahUKEwiA0MHYj6iEAxU7UKQEHZBJDkUQ4kB6BAgQEAA"}
                        mapLinkText={"Reception"}
                        photoSource={receptionInvitation}
                    />
                </div> */}
                {/* <div className="Row">
                    <PhotoCardComponent
                        photoSource={theme}
                    />
                </div> */}
                <div className="Row">
                    <PhotoCardComponent
                        photoSource={card1}
                    />
                </div>
                <div className="Row">
                    <PhotoCardComponent
                        photoSource={card2}
                    />
                </div>

                <HeadingSection
                    title={"Join Us At Lana Events"}
                    subtitle={"18 Rue des Artisans, 95190 Goussainville"}
                    canCopy={true}
                />
                <div className="Row">
                    <MapComponent address="https://www.google.com/maps/place/LANA+EVENTS/@49.0189359,2.4664113,17z/data=!3m1!4b1!4m6!3m5!1s0x47e6416af16c83a1:0x8ff691d333704f86!8m2!3d49.0189324!4d2.4689862!16s%2Fg%2F11q22jf3yr?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D" />
                </div>

                {/*<div className="Row">*/}
                {/*    <img src={underline} alt=""*/}
                {/*         className="img-fluid p-3 m-2"*/}
                {/*         style={{*/}
                {/*             width: '100%',*/}
                {/*             // marginTop: '5%',*/}
                {/*             // marginBottom: '5%',*/}
                {/*         }}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div className="Row">*/}
                {/*    <FunctionCardComponent*/}
                {/*        title={"Reception"}*/}
                {/*        subtitle={"18 May 2024"}*/}
                {/*        cocktailText={"reception from 6 p.m."}*/}
                {/*        other={"Salle aux Tulipes, 8 Rue des Bâtisseurs, 91560 Crosne, France"}*/}
                {/*        mapLink={"https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e60adcec7965c1:0xc27adb90a9518767?sa=X&ved=2ahUKEwiA0MHYj6iEAxU7UKQEHZBJDkUQ4kB6BAgQEAA"}*/}
                {/*        mapLinkText={"Salle aux Tulipes"}*/}
                {/*        photoSource={sallePhoto}*/}
                {/*        // tail={"Mairie de Drancy"}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*<div className="Row">*/}
                {/*    <HeadingSection*/}
                {/*        title={"Theme of the day"}*/}
                {/*        subtitle={"Reception - pastel"}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div className="Row">*/}
                {/*    <ThemeSection/>*/}
                {/*</div>*/}
                {/*<div className="Row bg-dark-subtle pt-2">*/}
                {/*    <div className="container small">*/}
                {/*        <footer className="row">*/}
                {/*            <div className="col-12 text-center">*/}
                {/*                <p className="h small">©PuvistyneTech</p>*/}
                {/*                <p className="small">Contact me at puvistien@gmail.com / +33 7 66 07 21 89</p>*/}
                {/*            </div>*/}
                {/*        </footer>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="Row">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
