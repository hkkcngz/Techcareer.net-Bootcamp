import React from 'react'
import { Col, Row } from 'antd';
import ProductComp from '../Components/ProductComp';

export default function Product() {
  return (
    <>
        <Row style={{padding:"2rem 0"}}>
            <Col span={12} offset={6}>
              {(() => {
                if (localStorage.getItem("user")) {
                  return (
                    <ProductComp />
                  )
                } else {
                  return (
                    <h3>Lütfen Giriş Yapınız.</h3>
                  )
                }
              })()}
            </Col>
        </Row>
    </>
  )
}
