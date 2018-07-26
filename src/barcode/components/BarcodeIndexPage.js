import React from "react";
import BarcodeForm from "./BarcodeForm";
import FoodInfo from "./FoodInfo";
import { Container, Row, Col } from 'reactstrap';

const BarcodeIndexPage = () => (
  <Container>
    <BarcodeForm />
    <FoodInfo />
  </Container>
);

export default BarcodeIndexPage;
