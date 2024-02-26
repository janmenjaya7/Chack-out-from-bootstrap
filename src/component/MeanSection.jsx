import React from "react";
function MeanSection() {
  return (
    <div className="bg-light">
      <div className="container" style={{ maxWidth: "960px" }}>
        <div className="py-5 text-center img-section">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-4-icon.png"
            alt="images"
            width="70"
            height="69"
            className="d-block mx-auto mb-4"
          />
          <h2>Checkout form</h2>
          <p className="text-dummy">
            Below is an example form built entirely with Bootstrap's form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 order-md-4">
            <h4 className="d-flex justify-content-between">
              <span style={{ color: "#6c757d" }}>Your cart</span>
              <span className="badge badge-pill rounded-circle text-bg-secondary">
                3
              </span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed p-3">
                <div>
                  <h6>Product name</h6>
                  <small>Brief description</small>
                </div>
                <span>$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed p-3">
                <div>
                  <h6>Second product</h6>
                  <small>Brief description</small>
                </div>
                <span>$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed p-3">
                <div>
                  <h6>Third item</h6>
                  <small>Brief description</small>
                </div>
                <span>$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small className="">VEXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed p-3">
                <div>
                  <h6>Total (USD)</h6>
                </div>
                <span>$20</span>
              </li>
            </ul>
            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label for="firstName" className="mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <label for="Lastname" className="mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="username">Username</label>
                  <div className="form-inline">
                    <div className="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label for="email">
                    Email
                    <span>(option)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="yourname@gmail.com"
                  />
                </div>
                <div className="mb-3">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="123 no somthing"
                  />
                </div>
                <div className="mb-3">
                  <label for="address 2">
                    Address<span>(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="123 no somthing"
                  />
                </div>
                <div className="row">
                  <div className="col-sm-5 col-md-5">
                    <label for="country">Country</label>
                    <select
                      className="custom-select d-block w-100 form-select"
                      id="country"
                    >
                      <option value>Choose...</option>
                      <option>united state</option>
                    </select>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <label for="state">State</label>
                    <select className="custom-select d-block w-100 form-select">
                      <option value>Choose...</option>
                      <option>California</option>
                    </select>
                  </div>
                  <div className="col-mb-3 col-sm-3 mb-4">
                    <label for="zip code">Zip</label>
                    <input type="text" className="form-control" />
                  </div>
                  <hr className="mb-4" />
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input m-1"
                    />
                    <label>
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input m-1"
                    />
                    <label className="custom-control-label mb-3">
                      Save this information for next time
                    </label>
                  </div>
                  <hr className="mb-4" />
                  <h4 className="mb-4">Payment</h4>
                  <div className="d-block">
                    <div className="custom-control custom-radio">
                      <input type="radio" />
                      <label for="credit" className="m-1">
                        Credit card
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input type="radio" />
                      <label for="devit" className="m-1">
                        Debit card
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input type="radio" />
                      <label for="paypal" className="m-1">
                        Paypal
                      </label>
                    </div>
                    <div className="row mt-3">
                      <div className="col-mb-6 col-sm-6 mb-4">
                        <label>Name on card</label>
                        <input type="text" className="form-control" />
                        <small>Full name as displayed on card</small>
                      </div>
                      <div className="col-mb-6 col-sm-6 mb-4">
                        <label>Credit card number</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <label>Expiration</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-sm-3">
                        <label>CCV</label>
                        <input type="password" className="form-control mb-3" />
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <button
                      type="submit"
                      className="btn btn-primary d-grid gap-2 col-10 mx-auto"
                    >
                      Continue to checkout
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2017-2018 Company Name</p>
        <div className=" ">
          <ul className="list-inline d-flex justify-content-center">
            <p className="m-2">
              <a href="#" className="list-inline-item text-decoration-none">
                Privacy
              </a>
            </p>
            <p className="m-2">
              <a href="#" className="list-inline-item text-decoration-none">
                Terms
              </a>
            </p>
            <p className="m-2">
              <a href="#" className="list-inline-item text-decoration-none">
                Support
              </a>
            </p>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default MeanSection;
