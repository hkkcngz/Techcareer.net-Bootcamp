import React, {} from 'react'
import {  } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import * as yup from 'yup';
import {apiServices} from "../api/axios"


export default function AddProductComp() {

    let schema = yup.object().shape({
        name: yup.string()
          .required("Lütfen Ürün Adını Giriniz.")
          .min(3, "Ürün Adı Minimum 3 Karakterli Olmalı"),
    });
        
    const yupSync = {
        async validator({ field }, value) {
            await schema.validateSyncAt(field, { [field]: value });
        },
    };

    const onFinish = (values) => {
        console.log('Formdan alınan veriler: ', values);

        apiServices.add('products', values)
            .then((res) =>{
                console.log("Başarılı: " + res)
        })

    };
    return (
        <>
            <Form
            name="add_product"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            >
            <Form.Item
                name="name"
                rules={[yupSync]}
            >
                <Input placeholder="Ürün Adı" />
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Ekle
                </Button>
            </Form.Item>
        </Form>
        </>
    )
}
