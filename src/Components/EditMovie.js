import React from 'react'

const EditMovie = (props) => {
    return (
        <div className={props.editMovie}>
            {props.selectedMovie.map(movie => {
                return(
                <div className="modal-main container">
                    <p className="display-4 font-weight-bolder">{movie.Title}</p>
                    <form>
                        <div class="form-group">
                            <label for="movieTitle">Movie Title: </label>
                            <input class="form-control" onChange={props.changeHandler}type="text" name='Title'defaultValue={movie.Title} placeholder="Title"/>
                        </div>
                        <div class="form-group">
                            <label for="movieDirector">Director: {movie.Director}</label>
                            <input class="form-control" type="text" onChange={props.changeHandler} name='Director' defaultValue={movie.Director} placeholder="Director"/>
                        </div>
                        <div class="form-group">
                            <label for="movieYear">Year Released: {movie.Year}</label>
                            <input class="form-control" type="text" onChange={props.changeHandler}name='Year' defaultValue={movie.Year}/>
                        </div>
                        <div class="form-group">
                            <label for="movieRating">Rating: {movie.My_Rating}</label>
                            <input class="form-control" type="number" min="0" max="5" onChange={props.changeHandler} name='My_Rating' defaultValue={movie.My_Rating}/>
                        </div>
                        <div class="form-group">
                            <label for="Poster_URL">Movie Poster URL</label>
                            <input class="form-control" type="text" onChange={props.changeHandler}  name='Poster_URL' defaultValue={movie.Poster_URL}/>
                        </div>
                        <button onClick={props.saveEdit} className="btn btn-success">Save Changes</button>
                        <button id={movie.id} onClick={props.deleteMovie} className="btn btn-danger">Delete</button>
                    </form>
                </div>
            )})}
        </div>
    );
}

export default EditMovie