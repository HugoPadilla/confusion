import logo from './logo.svg';
import { Navbar, NavbarBrand, Nav } from 'reactstrap'
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar color="primary" dark expand="md" light >
          <div className="container">
            <NavbarBrand href="/">Ristorante Con FUsion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
