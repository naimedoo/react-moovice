import React from 'react'
import axios from "axios"
import Card from './Card'
const poster = "https://image.tmdb.org/t/p/w300"
// console.log("aaaa")
class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies : []

        }
    }
    
    componentDidMount = () => {
        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1ec8acd7db40cbcda32e99854585570f" 
        console.log(url)
        axios(url).then(res => {
            console.log(res.data.results)
            const movieList = res.data.results
            this.setState({
                movies: movieList,
                
            })
        }) 
        
    }
    render() {
        return (
            <>
             
            <h1>Popular</h1>
            <ul>{this.state.movies.map(movie => { 
                return <div key={movie.id}>
                    <Card title={movie.original_title} overwiew={movie.overwiew} releaseDate={movie.release_date} img={poster + movie.poster_path} />
                </div>
            })}</ul>
               
            
            </>
        )
    }
}
export default Popular