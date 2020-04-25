import React from 'react';
import fetchData from '../services/FetchData';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Loader from './Loader';
import Page404 from './Page404';
import logo from '../images/logo.png'
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: '',
      orderByName: false,
      translateToAlien: false,
      font: '',
      deadCharacters: false,
      loader: true,
    }
    this.iconAZ = React.createRef();
    this.iconAlien = React.createRef();
    this.iconSkull = React.createRef();
    this.updateLoader = this.updateLoader.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.resetInputValue = this.resetInputValue.bind(this);
    this.updateOrderByName = this.updateOrderByName.bind(this);
    this.updateTranslateToAlien = this.updateTranslateToAlien.bind(this);
    this.updateDeadCharacters = this.updateDeadCharacters.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.pageNotFound = this.pageNotFound.bind(this);
  }

  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          data: data.results,
          inputValue: '',
          loader: true,
        })
      })
    this.timer = setTimeout(this.updateLoader, 2000)
  }

  componentWillUnmount = () => clearTimeout(this.timer);
  componentDidUpdate = () => localStorage.setItem('inputValue', JSON.stringify(this.state.inputValue));
  updateLoader = () => this.setState({ loader: false });
  updateInputValue = (value) => this.setState({ inputValue: value });
  resetInputValue = () => this.setState({ inputValue: '' });

  updateOrderByName() {
    this.setState(prevState => ({ orderByName: !prevState.orderByName }));
    if (this.state.orderByName !== true) {
      this.iconAZ.current.classList.add('active')
      this.state.data.sort((a, b) => {
        if (a.name > b.name) { return 1 }
        if (a.name < b.name) { return -1 }
        return 0;
      })
    } else {
      this.iconAZ.current.classList.remove('active')
      this.state.data.sort(function (a, b) {
        if (a.id > b.id) { return 1; }
        if (a.id < b.id) { return -1 }
        return 0;
      })
    }
  }

  updateTranslateToAlien() {
    this.setState(prevState => ({ translateToAlien: !prevState.translateToAlien }));

    if (this.state.translateToAlien !== true) {
      this.setState({ font: 'fontAlien' });
      this.iconAlien.current.classList.add('active');
    } else {
      this.setState({ font: '' });
      this.iconAlien.current.classList.remove('active');
    }
  }

  updateDeadCharacters() {
    this.setState(prevState => ({ deadCharacters: !prevState.deadCharacters }));
    this.state.deadCharacters !== true ? this.iconSkull.current.classList.add('active') : this.iconSkull.current.classList.remove('active');
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
        return this.pageNotFound()
      }
    }
  }

  pageNotFound = () => <Page404 />;

  render() {
    const { data, inputValue, orderByName, loader, translateToAlien, font, deadCharacters } = this.state;
    const { updateInputValue, updateOrderByName, renderCharacterDetail, resetInputValue, updateTranslateToAlien, iconAZ, iconAlien, updateDeadCharacters, iconSkull, pageNotFound } = this;

    return (
      <div className="App">
        <header className="header">
          <a href="./"><img className="logo" src={logo} alt="Rick and Morty" /></a>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              {!data.length || loader
                ? <Loader />
                : <div>
                  <Filters
                    inputValue={inputValue}
                    updateInputValue={updateInputValue}
                    resetInputValue={resetInputValue}
                    orderByName={orderByName}
                    updateOrderByName={updateOrderByName}
                    translateToAlien={translateToAlien}
                    updateTranslateToAlien={updateTranslateToAlien}
                    deadCharacters={deadCharacters}
                    updateDeadCharacters={updateDeadCharacters}
                    iconAZ={iconAZ}
                    iconAlien={iconAlien}
                    iconSkull={iconSkull}
                  />
                  <CharacterList
                    data={data}
                    inputValue={inputValue}
                    fontAlien={font}
                    deadCharacters={deadCharacters}
                  />
                </div>
              }
            </Route>
            <Route path={"/character/:id"} render={renderCharacterDetail} />
            <Route path="/:id" render={pageNotFound} />
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