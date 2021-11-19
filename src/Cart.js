import { Component } from "react";

import "./App.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartValue: 0,
      cartList: [
        {id:"1",
        cardType:"Fancy Product",
        price:"$40.00 - $80.00",
        addCart: "Add to Card"},
        {
          id:"2",
          cardType:"Special Item",
          price:"$18.00",
          addCart: "Add to Card"
        },
        {
          id:"3",
          cardType:"Sale Item",
          price:"$$25.00",
          addCart: "Add to Card"
        },
        {
          id:"4",
          cardType:"Popular Item",
          price:"$40.00",
          addCart: "Add to Card"
        },
        {
          id:"5",
          cardType:"Sale Item",
          price:"$$25.00",
          addCart: "Add to Card"
        },
        {id:"6",
        cardType:"Fancy Product",
        price:"$40.00 - $80.00",
        addCart: "Add to Card"},
        {
          id:"7",
          cardType:"Special Item",
          price:"$20.00 $18.00",
          addCart: "Add to Card"
        },
        {
          id:"8",
          cardType:"Popular Item",
          price:"$40.00",
          addCart: "Add to Card"
        },
      ]
    }
  }

  ChangeName = (e) => {
    console.log(e)
    let id = e.id - 1;
    if(e.addCart === "Add to Card") {
      let cartValue = this.state.cartValue + 1;
      let cartList = {...this.state.cartList};
      cartList[id].addCart = "Remove From Cart"
      cartList = this.state.cartList;
      this.setState({cartValue, cartList})
    } else {
      let cartValue = this.state.cartValue - 1;
      let cartList = {...this.state.cartList};
      cartList[id].addCart = "Add to Cart"
      cartList = this.state.cartList;
      this.setState({cartValue, cartList})
    }
  }

  render() {
    return (
      <>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark">
                          Cart {this.state.cartValue}
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        {/* <!-- Header--> */}
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        
          {this.state.cartList.map((post) => {
            return (
              <>
                  <div class="col mb-5">
                    <div class="card h-100">
                        {/* <!-- Product image--> */}
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
                        {/* <!-- Product details--> */}
                        <div class="card-body p-4">
                            <div class="text-center">
                                {/* <!-- Product name--> */}
                                <h5 class="fw-bolder">{post.cardType}</h5>
                                {/* <!-- Product reviews--> */}
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                {/* <!-- Product price--> */}
                                {post.price}
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <button className="button" onClick={() => this.ChangeName(post)}>{post.addCart}</button>
                        </div>
                    </div>
                  </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
    <footer class="py-5 bg-dark">
      <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
    </footer>
    </>
  )}
}

export default Cart;