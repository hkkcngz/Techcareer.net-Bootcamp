import React, {useState, useEffect} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate  } from 'react-router-dom';
import * as yup from 'yup';


export default function LoginComp() {
    let navigate = useNavigate();

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
    }, []);

    let schema = yup.object().shape({
        username: yup.string()
          .required("Lütfen Kullanıcı Adını Doldurunuz.").min(3, "Kullanıcı Adı Minimum 3 Karakterli Olmalı"),
        password: yup.string().required("Lütfen Şifreyi Doldurunuz.").min(6,  "Şifre Minimum 6 Karakterli Olmalı"),
    });
        
    const yupSync = {
        async validator({ field }, value) {
            await schema.validateSyncAt(field, { [field]: value });
        },
    };

    const onFinish = (values) => {
        console.log('Formdan alınan veriler: ', values);

        schema.validate({
            username: values.username,
            password: values.password,
        }).then(function (valid) {
            console.log('Başarılı:', valid);
            setUser(valid);
            localStorage.setItem("user", JSON.stringify(valid));
            navigate("/");
        });

    };
    return (
        <>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            >
            <Form.Item
                name="username"
                rules={[yupSync]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Kullanıcı Adı" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[yupSync]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Şifre"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Beni hatırla</Checkbox>
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Giriş Yap
                </Button>
            </Form.Item>
        </Form>
        </>
    )
}
