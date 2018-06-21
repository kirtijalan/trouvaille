import React from 'react';

export default class MovieList extends React.Component{
    render(){
        let { list = [] } = this.props;
        let movieListDisplay = list ? list.map((listItem) => {
            return(
                <div>
                    <h2> {listItem.Title} </h2>
                    <p> {listItem.Year} </p>
                    <img src={listItem.Poster} alt={listItem.Title}/>
                </div>
            )
        })
        : null;
        return(
            <div>
                <p> {list.length>0 ? "Search Result: " : null} </p>
                {movieListDisplay}
            </div>
        )
    }
}