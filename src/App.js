import React, { Component } from 'react';
import './App.css';
import './styles/App.scss';
import Input from "./components/Input"
import Gallery from "./components/Gallery"
import Queries from "./components/Queries"

import getPhotos from './components/Api'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      isLoaded: false,
      isLoading: false,
      isError: false,
      items: null,
      query: []
    };
  }

  handleChange = () => e => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({[name]: value}, () => console.log(this.state))
  };

  handleSearch = ( item ) => {

    const APIkey = 'd9eb77c690a93b958ba751e8f0dd3e119897a50cfb3ab8006cd3a742dcde40e9';

    this.setState({
      isLoaded: false,
      isLoading: true,
      isError: false
    });

    getPhotos(this.state.input, APIkey)
    // fetch(`https://api.unsplash.com/search/photos?query=` + this.state.input + `&client_id=` + APIkey)
    //   .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
          isLoading: false,
          isError: (
            json.total === 0
            ? true
            : false
          )
        });
      })
  };

  handleSave = () => {
    if (this.state.input !== "" && this.state.isError !== true) {
      this.state.query.push(this.state.input);
      this.setState({query: this.state.query})
    }
  };

  render() {

    const { input, isLoaded, isLoading, isError, items, query } = this.state;
    const values = { input, isLoaded, isLoading, isError, items, query };

    return (
      <div className="App">
        <div className={"app__wrapper"}>
          <div className={"content__wrapper"}>
            <div className={"search"}>
              <Input
                  handleChange={this.handleChange}
                  values={values}
              />
            </div>
            <Gallery
                values={values}
            />
          </div>
          <div className={"sidebar__wrapper"}>
            <div className={"buttons"}>
              <button
                  className={"buttons__btn"}
                  onClick={this.handleSearch}
              >Search</button>
              <button
                  className={"buttons__btn"}
                  onClick={this.handleSave}
              >Save</button>
            </div>
            <Queries
                values={values}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
