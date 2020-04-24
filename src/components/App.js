import React from 'react';
import fetchData from '../services/FetchData';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Loader from './Loader';
import { Route, Switch } from 'react-router-dom';
import Page404 from './Page404';
import logo from '../images/logo.png'

import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: '',
      orderByName: false,
      searchResult: true,
      loader: false,
    }
    this.updateInputValue = this.updateInputValue.bind(this);
    this.resetInputValue = this.resetInputValue.bind(this);
    this.updateOrderByName = this.updateOrderByName.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.showLoader = this.showLoader.bind(this);
  }

  componentDidMount() {
    const localValue = JSON.parse(localStorage.getItem('inputValue'));

    fetchData()
      .then(data => {
        this.setState({
          data: data.results,
          inputValue: localValue,
          loader: false,
        })
      })
    this.timer = setTimeout(this.showLoader, 1500)
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  showLoader() {
    this.setState({ loader: true });
  }

  componentDidUpdate() {
    localStorage.setItem('inputValue', JSON.stringify(this.state.inputValue));
  }

  updateInputValue(value) {
    this.setState({
      inputValue: value
    })
  }

  resetInputValue() {
    this.setState({
      inputValue: ''
    })
  }

  updateOrderByName() {
    if (this.state.orderByName !== true) {
      this.setState({ orderByName: true })
      this.state.data.sort((a, b) => {
        if (a.name > b.name) { return 1 }
        if (a.name < b.name) { return -1 }
        return 0;
      })
    } else {
      this.setState({ orderByName: false })
      this.state.data.sort(function (a, b) {
        if (a.id > b.id) { return 1; }
        if (a.id < b.id) { return -1 }
        return 0;
      })
    }
  }

  renderCharacterDetail(props) {
    const urlId = props.match.params.id;
    const data = this.state.data;
    const findId = data.some(obj => obj.id === parseInt(urlId))

    for (let character of data) {
      if (parseInt(urlId) === character.id) {
        return <CharacterDetail
          CharacterData={character}
          iconStatus={character.status === 'Dead' ? "fas fa-skull" : ""}
          iconSpecies={character.species === 'Human' ? "fas fa-user-alt" : "fab fa-reddit-alien"}
        />
      }
      if (findId !== true) {
        return <Page404 />
      }
    }
  }

  render() {
    const { data, inputValue, orderByName, loader } = this.state;
    const { updateInputValue, updateOrderByName, updateData, renderCharacterDetail, resetInputValue } = this;

    return (
      <div className="App">
        <header className="header">
          <a href="/">
            <img className="logo" src={logo} alt="Rick and Morty" />
          </a>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {!data.length || !loader ?
                <Loader />
                :
              <div>
                <Filters
                  inputValue={inputValue}
                  updateInputValue={updateInputValue}
                  resetInputValue={resetInputValue}
                  updateData={updateData}
                  updateOrderByName={updateOrderByName}
                  orderByName={orderByName}
                />
                <CharacterList
                  data={data}
                  inputValue={inputValue}
                />
              </div>
              }
            </Route>
            <Route path="/character/:id" render={renderCharacterDetail} />
          </Switch>
        </main>
        <footer className="footer">
          <div>React Project April 2020 - Adalab Idelisa</div>
        </footer>
      </div>
    )
  }
}

export default App;
