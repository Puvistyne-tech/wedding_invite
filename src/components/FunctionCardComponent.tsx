import React from "react";
import shape from '../assets/gallery/shape2.png';
import background from '../assets/gallery/section_bg1.png';
import flower1 from '../assets/gallery/from-bottom.png';
import flower2 from '../assets/gallery/from-top.png';

interface FunctionCardComponentProps {
    title: string;
    subtitle?: string;
}

const FunctionCardComponent: React.FC<FunctionCardComponentProps> = ({title, subtitle}) => {
    return (
        <div className="row m-2"

             style={{
                 backgroundColor: '#fff7f3',
             }}
        >
            <div className="col m-5"
                style={{
                }}
            >
                {/*<img*/}
                {/*    src={flower1}*/}
                {/*    alt="..."*/}
                {/*    style={{*/}
                {/*        borderRadius: '1rem',*/}
                {/*        top: 5,*/}
                {/*        left: 250,*/}
                {/*        position: 'fixed',*/}
                {/*        zIndex: 0,*/}
                {/*        height: '40vh',*/}
                {/*        width: '30vh',*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<img*/}
                {/*    src={flower2}*/}
                {/*    alt="..."*/}
                {/*    style={{*/}
                {/*        borderRadius: '1rem',*/}
                {/*        top: 140,*/}
                {/*        left: -100,*/}
                {/*        position: 'relative',*/}
                {/*        zIndex: 0,*/}
                {/*        height: '20vh',*/}
                {/*        width: '20vh',*/}
                {/*    }}*/}
                {/*/>*/}
                <div className="card border-0 shadow-lg p-3"
                     style={{
                         borderRadius: '1rem',
                         zIndex: 1,
                     }}
                >
                    <div className="card-body img-fluid card-img d-flex flex-column align-items-center justify-content-center"
                         style={{
                             backgroundImage: `url(${shape})`,
                             // backgroundRepeat: 'no-repeat',
                             backgroundSize: 'cover',
                             // backgroundPosition: 'center',
                             height: '60vh', // Adjust the height as needed
                         }}
                    >
                        <div className="card-title text-center display-5 "
                                style={{
                                    color: '#dc6651',
                                    fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
                                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
                                }}
                        >
                            {title}
                        </div>
                        <div className="card-text text-center"
                             style={{
                                 color: '#dc6651',
                                 fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
                                 textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
                             }}
                        >
                            {subtitle}
                        </div>
                    </div>

                </div>

            </div>
            <div className={"col"}>
                ezfoin
            </div>
        </div>
    );
};

export default FunctionCardComponent;