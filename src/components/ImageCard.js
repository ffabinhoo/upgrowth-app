import React, { Component } from 'react';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    render() {
        return (
            <>
                <div className="col-md-3">
                    <img ref={this.imageRef}
                        src={this.props.image.urls.regular}
                        alt={this.props.image.alt_description} className="img-thumbnail" />
                </div>
            </>
        )
    }
}

export default ImageCard;