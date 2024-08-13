'use client';

import { Button, Checkbox, CheckboxProps, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { useState } from 'react';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { signUp } from '@/app/auth/signup';

export default function Signup() {
  const { Item } = Form;
  const [isChecked, setIsChecked] = useState<boolean>();

  const onChange: CheckboxProps['onChange'] = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <div className="flex flex-col">
        <Title
          level={4}
          style={{
            fontWeight: 900,
            marginBottom: 0,
          }}
        >
          회원가입
        </Title>
        <Text
          style={{
            color: '#71727A',
          }}
        >
          회원가입하기
        </Text>
      </div>

      <Form
        name="signup"
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={signUp}
        autoComplete="off"
      >
        <Item
          name="name"
          label="Name"
          rules={[{ required: true }, { type: 'string', min: 6 }]}
        >
          <Input placeholder="Name" />
        </Item>
        <Item
          name="email"
          label="Email"
          rules={[
            { required: true },
            { type: 'email', warningOnly: true },
            { type: 'string', min: 6 },
          ]}
        >
          <Input placeholder="name@example.com" />
        </Item>
        <Item
          name="password"
          label="Password"
          style={{
            marginBottom: 0,
          }}
          rules={[{ required: true }, { type: 'string', min: 6 }]}
        >
          <Password
            name="password"
            placeholder="Create a password"
            style={{
              marginBottom: 12,
            }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Item>
        <Item
          name="confirmPassword"
          rules={[{ required: true }, { type: 'string', min: 6 }]}
        >
          <Password
            name="confirmPassword"
            placeholder="Confirm password"
            style={{
              marginBottom: 12,
            }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Item>

        <Checkbox
          onChange={onChange}
          style={{
            color: '#71727A',
          }}
        >
          저는 <text className="text-primary">이용약관</text>을 숙지하였으며
          규정에 <text className="text-primary">동의합니다.</text>
        </Checkbox>

        <Button
          style={{
            backgroundColor: isChecked ? '#00B890' : '#D3D3D3',
            color: 'white',
          }}
          htmlType="submit"
          disabled={!isChecked}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
