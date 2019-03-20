import React, {Component} from 'react';

export class Gallery extends Component {

    render() {
        const {values} = this.props;

        return (
            <React.Fragment>
                <div className={"gallery"}>

                    {values.isLoaded && !values.isError && !values.isLoading
                        ? values.items.results.map((i) => {

                            let imgUrl = {
                                backgroundImage: 'url(' + i.urls.thumb + ')'
                            };

                            return (
                                <div
                                    style={imgUrl}
                                    key={i.id}
                                    alt={i.alt_description}
                                    className={i.height < i.width ? "img__horizontal" : "img__vertical"}
                                />

                            )
                        })
                        : values.isLoaded && values.isError && !values.isLoading
                            ? "No images found, please try another keywoard :)"
                            : values.isLoading
                                ? "Loading..."
                                : "Your search images will show up here :)"

                    }
                </div>
            </React.Fragment>
        );
    }
}


export default Gallery;
