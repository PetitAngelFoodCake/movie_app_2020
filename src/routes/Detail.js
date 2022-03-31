import React from 'react';
import PropTypes from 'prop-types';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state == undefined) { 
            history.push('/');
        }
    }

    render() {
        console.log(this.props);
        const { location } = this.props;
        if (location.state) {
            return  (
            <div className="detail__container">
                <span>
                    <a href={location.state.large_cover_image} alt={location.state.title} target="_blank">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    </a>
                    <h3 className="detail__title">{location.state.title}</h3>
                    <h5 className="detail__year">{location.state.year}</h5>
                    <ul className="detail__genres">
                        {location.state.genres.map((genre, index) => {
                            return(
                            <li key={index} className="detail__genre">
                                {genre}                      
                            </li>
                            );
                        })}
                    </ul>
                    <h5 className="detail__runtime">{location.state.runtime} min</h5>
                    <h5 className="detail__rating">Ratings {location.state.rating}</h5>
                </span>
                <span>
                    <p className="detail__summary">{location.state.summary}</p>
                </span>
            </div>
            );
        }
        else {
            return null;
        }
    }
}

Detail.propTypes = { 
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Detail;
