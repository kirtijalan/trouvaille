import React from 'react';
import MovieList from './MovieList';

class SearchMovie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchInput : "",
            itemList: []
        }

    }

    acceptInput = (e) => {
        this.setState({
            searchInput : e.target.value
        })
    }

    findMovies = (keyword) => {
        let apiEndpoint = `http://www.omdbapi.com/?s=${keyword}&apikey=7e79b676`;
        fetch(apiEndpoint)
        .then(res => res.json())
        .then( 
            (result) => {
                console.log(result.Search)
                this.setState({
                    itemList : result.Search
                })
            },
            (error) => {
                console.log(error)
            }
        )

    } 

    render(){

        return(
            <div>
                <input type="text" 
                    name="searchbox-movie" 
                    placeholder="Enter keyword" 
                    value={this.state.searchInput}
                    onChange={(e)=>{this.acceptInput(e)}}
                    />
                <input type="button" value="Search" onClick={(e) => {this.findMovies(this.state.searchInput)}}/>
                <MovieList list={this.state.itemList} />
            </div>
        )
    }
}

export default SearchMovie;
