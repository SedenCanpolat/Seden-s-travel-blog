import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import firstPicture from "./pitcures/matt.jpg";
import secondPicture from "./pitcures/most.jpg";
import thirdPicture from "./pitcures//aron-yigin-7U6KI6leN1w-unsplash.jpg";

const images = [firstPicture, secondPicture, thirdPicture];

const Galeria = () => {
    return ( 
        <div className="galeria">
           
            <div className="pitcure">
               <AliceCarousel autoPlay autoPlayInterval="3000" 
               animationType="fadeout" keyboardNavigation={true}>
                
                {images.map((sc) => (
                    <div>
                        <img src={sc} alt="source" className="mpic"/>
                    </div>
                ))
                }

               </AliceCarousel>
            </div>
            
        </div>
     );
}
 
export default Galeria;

