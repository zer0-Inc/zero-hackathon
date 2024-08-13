'use client';

import React from 'react';
import { Button, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { signIn } from '@/app/auth/signin';
import Link from 'next/link';
import Title from 'antd/es/typography/Title';
import SignInLogo from '@/components/SigninLogo';

export type FieldType = {
  email: string;
  password: string;
};

export default function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <SignInLogo />
      <Title
        level={2}
        style={{
          fontWeight: 900,
        }}
      >
        안녕하세요!
      </Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={signIn}
        autoComplete="off"
      >
        <Input placeholder="Email Address" required={true} />
        <Password
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          required={true}
        />
        <Button
          style={{
            backgroundColor: '#00B890',
            color: 'white',
          }}
          htmlType="submit"
        >
          Login
        </Button>
      </Form>
      <div className="flex flex-1 items-center">
        <p className="text-gray font-normal">계정이 없으신가요?</p>

        <Link
          href="/signup"
          className="flex place-content-center no-underline text-primary font-bold "
        >
          회원가입하기
        </Link>
      </div>
    </div>
  );
}
