import React from "react";
import ImageCard from './ImageCard'

const ImageList = (props) => {
   
        const imgs = props.resultImages.map(img => {
            return <ImageCard key={img.id} image={img} />
        });

        return (
            <>
                {props.resultImages.length > 0 ?  `Photos found: ${props.resultImages.length}`  : ''}
                <div className="row text-center text-lg-left">{imgs}</div>
            </>
        )
}

export default ImageList;





