import React from 'react';
import fetchData from '../services/FetchData';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Route, Switch } from 'react-router-dom';
import Page404 from './Page404';

import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: '',
      orderValue: "",
    }
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateOrderValue = this.updateOrderValue.bind(this);
    this.updateDataOrder = this.updateDataOrder.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }

  componentDidMount() {
    const localValue = JSON.parse(localStorage.getItem('inputValue'));
    fetchData()
      .then(data => {
        this.setState({
          data: data.results,
          inputValue: localValue
        })
      })
  }

  componentDidUpdate() {
    localStorage.setItem('inputValue', JSON.stringify(this.state.inputValue));
  }

  updateInputValue(value) {
    this.setState({
      inputValue: value
    })
  }

  updateOrderValue(value) {
    this.setState({
      orderValue: value
    })
    this.updateDataOrder()
  }

  updateDataOrder() {
    if (this.state.orderValue === "Por nombre") {
      this.state.data.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1
        }
        return 0;
      }
      )
    } else {
      this.state.data.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1
        }
        return 0;
      }
      )
    }
  }

  renderCharacterDetail(props) {
    const urlId = props.match.params.id;
    const data = this.state.data;

    for (let character of data) {
      if (parseInt(urlId) === character.id) {
        return <CharacterDetail
          CharacterData={character}
          iconStatus={character.status === 'Dead' ? "fas fa-skull" : ""}
          iconSpecies={character.species === 'Human' ? "fas fa-user-alt" : "fab fa-reddit-alien"}
        />
      } else {
        return (
          <Page404 />
        )
      }
    }
  }

  render() {
    const { data, inputValue, orderValue } = this.state;
    const { updateInputValue, updateOrderValue } = this;
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Filters
                inputValue={inputValue}
                updateInputValue={updateInputValue}
                updateOrderValue={updateOrderValue}
                orderValue={orderValue}
              />
              <CharacterList
                data={data}
                inputValue={inputValue}
                orderValue={orderValue}
              />
            </Route>
            <Route path="/character/:id" render={this.renderCharacterDetail} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App;
