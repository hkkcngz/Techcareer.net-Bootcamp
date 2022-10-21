import React from 'react'
import { Col, Row } from 'antd';
import LoginComp from '../Components/LoginComp';

export default function Login() {
  return (
    <>
      <Row style={{padding:"2rem 0"}}>
        <Col span={12} offset={6}>
          {(() => {
              if (localStorage.getItem("user")) {
                return (
                  <h3>Hoşgeldiniz!</h3>
                )
              } else {
                return (
                  <LoginComp />
                )
              }
            })()}
          
        </Col>
      </Row>
    </>
  )
}
