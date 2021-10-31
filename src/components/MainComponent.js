import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "../components/MenuComponent";
import { DISHES } from "../shared/dishes";
import { Component } from "react";
import DishDetail from "../components/DishdetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div className="container ">
        <Navbar color="primary" dark expand="md" light>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con FUsion</NavbarBrand>
          </div>
        </Navbar>

        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />

        <DishDetail
          dish={
            this.state.dishes.filter( (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
