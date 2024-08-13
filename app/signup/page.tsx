'use client';

import { Button, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react';
import { signUp } from '@/app/auth/signup';

export default function Signup() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={signUp}
        autoComplete="off"
      >
        <Input placeholder="Email Address" />
        <Password
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Button
          style={{
            backgroundColor: '#00B890',
            color: 'white',
          }}
          htmlType="submit"
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
