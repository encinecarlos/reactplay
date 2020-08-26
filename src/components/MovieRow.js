import React, {useState} from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);
    const handleLeftArrow = () => {
        let setX = scrollX + Math.round(window.innerWidth / 2);
        if (setX > 0) {
            setX = 0;
        }

        setScrollX(setX);
    }

    const handleRightArrow = () => {
        let setX = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;
        if ((window.innerWidth - listWidth) > setX)
        {
            setX = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(setX);
    }

    return (
        <div className="movierow">
            <h2>{title}</h2>
            <div className="movierow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movierow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="movierow--listarea">
                <div className="movierow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movierow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
