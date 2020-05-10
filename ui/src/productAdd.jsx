/* eslint linebreak-style: ["error","windows"] */

import React from 'react';
import {
  Row, Col, Form, FormControl, FormGroup, ControlLabel, Button,
} from 'react-bootstrap';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAddForm;
    const product = {
      Name: form.product.value,
      Price: form.price.value.slice(1),
      Category: form.category.value,
      Image: form.image.value,
    };
    const { createProduct } = this.props;
    createProduct(product);
    form.price.value = '$';
    form.product.value = '';
    form.image.value = '';
  }

  render() {
    return (
      <div>
        <Form inline name="productAddForm" className="productAddForm" onSubmit={this.handleSubmit}>
          <Row>
            <Col xs={6} sm={4} md={3} lg={1}>
              <FormGroup controlId="category">
                <ControlLabel>Category</ControlLabel>
                <FormControl
                  componentClass="select"
                >
                  <option value="shirt">Shirts</option>
                  <option value="jeans">Jeans</option>
                  <option value="jacket">Jackets</option>
                  <option value="sweater">Sweaters</option>
                  <option value="accessories">Accessories</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={6} sm={4} md={3} lgOffset={1} lg={2}>
              <FormGroup>
                <ControlLabel>Price Per Unit</ControlLabel>
                <FormControl type="text" name="price" defaultValue="$" />
              </FormGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={6} sm={4} md={3} lg={2}>
              <FormGroup>
                <ControlLabel>Product Name</ControlLabel>
                <FormControl type="text" name="product" />
              </FormGroup>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
              <FormGroup>
                <ControlLabel>Image URL</ControlLabel>
                <FormControl type="text" name="image" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={4} md={3} lg={1}>
              <br />
              <Button bsStyle="primary" type="submit" value="Add Product">Add Product</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
