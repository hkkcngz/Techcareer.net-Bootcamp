import React from 'react'
import AddProductComp from '../Components/AddProductComp';
import { Col, Row } from 'antd';

export default function AddProduct() {
  return (
    <>
      <Row style={{padding:"2rem 0"}}>
          <Col span={12} offset={6}>
              <AddProductComp />
          </Col>
      </Row>
    </>
  )
}
