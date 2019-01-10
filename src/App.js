import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import IndexPage from './Components/IndexPage'
import Footer from './Components/Footer'
import AddMovie from './Components/AddMovie'
import ShowMovie from './Components/ShowMovie'
import EditMovie from './Components/EditMovie'



class App extends Component {
  constructor(){
    super()
      this.state = {
        movies: [],
        selectedMovie:[],
        editMovie:false
      };
    }
  currentState = () => {
    fetch('https://reds-movie-backend.herokuapp.com/')
      .then(response => response.json())
      .then(data => this.setState({ movies : data }));
  }

  componentDidMount() {
    this.currentState()
  }

  selectMovie = (event) => {
    fetch(`https://reds-movie-backend.herokuapp.com/${event.target.id}`)
      .then(response => response.json())
      .then(data => this.setState({ selectedMovie : data }))
  }

  showEdit = () => {
    this.setState({editMovie : true })
  }
  saveEdit = () => {
    this.setState({editMovie : false })
  }
  deleteMovie = (event) => {
    fetch(`https://reds-movie-backend.herokuapp.com/${event.target.id}`, { method : 'DELETE' })
    .then(response => {
      this.currentState()
      this.saveEdit()
      this.setState ({ selectedMovie : [] })
    })
    
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container-fluid">
            <Route path='/' exact component={ HomePage } />
            <div className="container row">
              <div className="col-4">
                <Route path='/movies' render = {props => <IndexPage {...props} movies = {this.state.movies} selectMovie ={this.selectMovie} />} />
              </div>
              <div className="col-8">
                <Route path='/' render = {props => <ShowMovie {...props} selectedMovie = {this.state.selectedMovie} 
                showEdit={this.showEdit} />} />
                <EditMovie 
                editMovie={this.state.editMovie ? "modal display-block" : "modal display-none"} 
                showEdit={this.showEdit} saveEdit={this.saveEdit} 
                selectedMovie={this.state.selectedMovie} deleteMovie={this.deleteMovie}/>  
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
