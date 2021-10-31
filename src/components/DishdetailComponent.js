import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.dish = props.dish;
  }

  renderComments(comments) {
    if (comments != null) {
      const comment = this.props.dish.comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="col-12 col-md-12 col-xs12 col-sm-12 m-1"
          >
            <p>{comment.comment}</p>
            <p>{"--" + comment.author + ", " + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
          </div>
        );
      });
      return comment;
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="row col-12 m-1">
          <div className="col-12 col-md-5 col-xm-12 col-sm-12">
            <Card>
              <CardImg
                width="100%"
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle className="h4 text-primary">{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 col-sm-12 col-xm-12 m-1">
            <h4 className="text-primary">Comments</h4>
            <div>{this.renderComments(this.props.dish.comments)}</div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
