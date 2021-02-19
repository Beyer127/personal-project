import React, { Component } from "react";
import axios from "axios";

class AddPost extends Component {
  constructor() {
    super();

    this.state = {
      itemName: "",
      image: "",
      price: 0,
      description: "",
      edit: false,
    };
  }

  addPost = (itemName, image, price, description) => {
    axios
      .post("/api/item", { itemName, image, price, description })
      .then((res) => {
        this.setState = {
          itemName: res.data,
          image: res.data,
          price: res.data,
          description: res.data,
        };
        this.props.history.push("/posts");
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      this.setState({ edit: true });
    }
  }

  editItem = (itemName, image, price, description, id) => {
    axios
      .put(`/api/edit/${id}`, { itemName, image, price, description, id })
      .then(() => {
        this.props.history.push("/dashboard");
      });
  };
  render() {
    const { itemName, image, price, description } = this.state;
    return (
      <div>
        <h1>Add Post</h1>
        <div className="container">
          <div id="input">
            <input
              id="addPost"
              onChange={(e) => this.handleChange(e)}
              placeholder="item"
              value={itemName}
              name="itemName"
            />
            <input
              id="addPost"
              onChange={(e) => this.handleChange(e)}
              placeholder="image"
              value={image}
              name="image"
            />
            <input
              id="addPost"
              onChange={(e) => this.handleChange(e)}
              placeholder="description"
              value={description}
              name="description"
            />
            <input
              id="addPost"
              onChange={(e) => this.handleChange(e)}
              placeholder="price"
              value={price}
              name="price"
            />
            <div id="addPostButton">
              <button
                onClick={() => {
                  this.addPost(itemName, image, price, description);
                }}
              >
                Add Post
              </button>
              <button
                onClick={() =>
                  this.editItem(
                    itemName,
                    image,
                    price,
                    description,
                    this.props.match.params.id
                  )
                }
              >
                edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;
