import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import { Link, useNavigate  } from 'react-router-dom';
const { Header } = Layout;


export default function HeaderComp() {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
    <Header>
      <Row>
        <Col span={2}>
          <div className="logo" />
        </Col>
        <Col span={10}>
          <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}>
            <Menu.Item key={1}>
              <Link to='/'>Anasayfa</Link>
            </Menu.Item>
            {(() => {
              if (localStorage.getItem("user")) {
                return (
                  <Menu.Item key={2}>
                    <Link to='/' onClick={handleLogout}>Çıkış Yap</Link>
                  </Menu.Item>
                )
              } else {
                return (
                  <Menu.Item key={2}>
                    <Link to='/login'>Giriş</Link>
                  </Menu.Item>
                )
              }
            })()}
            <Menu.Item key={3}>
              <Link to='/products'>Ürünler</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
    </>
  )
}
