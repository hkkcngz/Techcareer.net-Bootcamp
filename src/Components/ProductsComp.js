import React, { useEffect, useState } from 'react'
import {apiServices} from "../api/axios"
import {Table, Space, Button} from 'antd';
import { Link } from 'react-router-dom';

export default function ProductsComp() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = () => {
    apiServices.getAll('products')
      .then(data => {
          setTimeout(() => {
              setProducts(data)
          }, 500)
      }).catch((err) => {
          console.log('Hata: ', err);
          throw err
      })
  }

  const deleteProduct = (id) => {
    console.log(id.id)

    apiServices.delete('products', id.id)
      .then(data => {
          setTimeout(() => {
              setProducts(data)
          }, 500)
      }).catch((err) => {
          console.log('Hata: ', err);
          throw err
    })

  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <a>{id}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Unit Price',
      dataIndex: 'unitPrice',
      render: (unitPrice) => <a>{unitPrice}</a>,
    },
    {
      title: 'Unit In Stock',
      dataIndex: 'unitsInStock',
      render: (unitsInStock) => <a>{unitsInStock}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (productId) => (
        <>
        <Space size="middle">
          <Button onClick={(e) => { 
            deleteProduct(productId)
          }}>Sil</Button>
        </Space>
        <Space size="middle">
          <Link to={"/product/"+productId.id}><Button>Detay</Button></Link>
      </Space>
        </>
      ),
    },
  ];

  return (
    <>
      <h3>Ürün Listesi</h3>
      <Link to="/addproduct">
        <Button>Yeni Ürün Ekle</Button>
      </Link>
      
      <Table columns={columns} dataSource={products} rowKey="id" />
    </>
  )
}
