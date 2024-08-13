// 'use client';

// import React from 'react';
// import { Button, Divider, Form, Input } from 'antd';
// import Password from 'antd/es/input/Password';
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// import { signIn } from '@/app/auth/signin';
// import Link from 'next/link';
// import Title from 'antd/es/typography/Title';
// import SignInLogo from '@/components/SigninLogo';

// export type FieldType = {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

// export default function Login() {
//   const { Item } = Form;

//   return (
//     <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
//       <SignInLogo />
//       <Title
//         level={2}
//         style={{
//           fontWeight: 900,
//         }}
//       >
//         안녕하세요!
//       </Title>
//       <Form
//         name="basic"
//         layout="vertical"
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 16 }}
//         style={{ maxWidth: 600 }}
//         initialValues={{ remember: true }}
//         onFinish={signIn}
//         autoComplete="off"
//       >
//         <Item
//           name="email"
//           label="Email"
//           rules={[{ required: true }, { type: 'email', warningOnly: true }]}
//         >
//           <Input name="email" placeholder="Email Address" required={true} />
//         </Item>
//         <Item name="password" label="Password" rules={[{ required: true }]}>
//           <Password
//             placeholder="Password"
//             iconRender={(visible) =>
//               visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//             }
//             required={true}
//           />
//         </Item>
//         <Button
//           style={{
//             backgroundColor: '#00B890',
//             color: 'white',
//           }}
//           htmlType="submit"
//         >
//           Login
//         </Button>
//       </Form>
//       <div className="flex flex-1 items-center">
//         <p className="text-gray font-normal">계정이 없으신가요?</p>

//         <Link
//           href="/signup"
//           className="flex place-content-center no-underline text-primary font-bold "
//         >
//           회원가입하기
//         </Link>
//       </div>
//       <Divider />
//     </div>
//   );
// }

//'use client';

// import React from 'react';
// import { Button, Divider, Form, Input } from 'antd';
// import Password from 'antd/es/input/Password';
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// import { signIn } from '@/app/auth/signin';
// import Link from 'next/link';
// import Title from 'antd/es/typography/Title';
// import SignInLogo from '@/components/SigninLogo';

// export type FieldType = {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

// export default function Login() {
//   const { Item } = Form;

//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <div className="w-full px-8 sm:max-w-md flex flex-col justify-center gap-2">
//         <SignInLogo />
//         <Title
//           level={2}
//           style={{
//             fontWeight: 900,
//           }}
//         >
//           안녕하세요!
//         </Title>
//         <Form
//           name="basic"
//           layout="vertical"
//           labelCol={{ span: 8 }}
//           wrapperCol={{ span: 16 }}
//           style={{ maxWidth: 600 }}
//           initialValues={{ remember: true }}
//           onFinish={signIn}
//           autoComplete="off"
//         >
//           <Item
//             name="email"
//             label="Email"
//             rules={[{ required: true }, { type: 'email', warningOnly: true }]}
//           >
//             <Input name="email" placeholder="Email Address" required={true} />
//           </Item>
//           <Item name="password" label="Password" rules={[{ required: true }]}>
//             <Password
//               placeholder="Password"
//               iconRender={(visible) =>
//                 visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//               }
//               required={true}
//             />
//           </Item>
//           <Button
//             style={{
//               backgroundColor: '#00B890',
//               color: 'white',
//               width: '100%',
//             }}
//             htmlType="submit"
//           >
//             Login
//           </Button>
//         </Form>
//         <div className="flex items-center justify-between">
//           <p className="text-gray font-normal">계정이 없으신가요?</p>

//           <Link href="/signup" className="no-underline text-primary font-bold">
//             회원가입하기
//           </Link>
//         </div>
//         <Divider />
//       </div>
//     </div>
//   );
// }

/*
'use client';

import React from 'react';
import { Button, Divider, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { signIn } from '@/app/auth/signin';
import Link from 'next/link';
import Title from 'antd/es/typography/Title';
import SignInLogo from '@/components/logo/SigninLogo';

export type FieldType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Login() {
  const { Item } = Form;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-10 bg-white rounded-lg shadow-lg flex flex-col justify-center gap-4">
        <SignInLogo
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '150px',
            margin: '0 auto',
          }}
        />
        <Title
          level={2}
          style={{
            fontWeight: 900,
            textAlign: 'left',
            fontSize: '2rem',
          }}
        >
          안녕하세요!
        </Title>
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: '100%' }}
          initialValues={{ remember: true }}
          onFinish={signIn}
          autoComplete="off"
        >
          <Item
            name="email"
            label="Email"
            rules={[{ required: true }, { type: 'email', warningOnly: true }]}
          >
            <Input
              name="email"
              placeholder="Email Address"
              size="large"
              required={true}
            />
          </Item>
          <Item name="password" label="Password" rules={[{ required: true }]}>
            <Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              size="large"
              required={true}
            />
          </Item>
          <Button
            style={{
              backgroundColor: '#00B890',
              color: 'white',
              width: '100%',
              height: '50px',
              fontSize: '1.2rem',
            }}
            htmlType="submit"
            size="large"
          >
            Login
          </Button>
        </Form>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-600 font-normal">계정이 없으신가요?</p>

          <Link
            href="/signup"
            className="no-underline text-primary font-bold text-lg"
          >
            회원가입하기
          </Link>
        </div>
        <Divider />
      </div>
    </div>
  );
}
*/

/*
'use client';

import React from 'react';
import { Button, Divider, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { signIn } from '@/app/auth/signin';
import Link from 'next/link';
import Title from 'antd/es/typography/Title';
import SignInLogo from '@/components/SigninLogo';

export type FieldType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Login() {
  const { Item } = Form;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg flex flex-col justify-center gap-6">
        <SignInLogo
          style={{ width: '120px', height: 'auto', margin: '0 auto' }}
        />
        <Title
          level={2}
          style={{
            fontWeight: 900,
            textAlign: 'center',
            fontSize: '1.8rem',
            marginBottom: '0',
          }}
        >
          안녕하세요!
        </Title>
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: '100%' }}
          initialValues={{ remember: true }}
          onFinish={signIn}
          autoComplete="off"
        >
          <Item
            name="email"
            rules={[{ required: true }, { type: 'email', warningOnly: true }]}
            style={{ marginBottom: '16px' }}
          >
            <Input
              name="email"
              placeholder="Email Address"
              size="large"
              required={true}
            />
          </Item>
          <Item
            name="password"
            rules={[{ required: true }]}
            style={{ marginBottom: '8px' }}
          >
            <Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              size="large"
              required={true}
            />
          </Item>
          <Link
            href="/forgot-password"
            className="text-primary font-normal text-sm float-right mb-4"
          >
            비밀번호를 잊으셨나요?
          </Link>
          <Button
            style={{
              backgroundColor: '#00B890',
              color: 'white',
              width: '100%',
              height: '45px',
              fontSize: '1.1rem',
              borderRadius: '4px',
            }}
            htmlType="submit"
            size="large"
          >
            Login
          </Button>
        </Form>
        <Divider />
        <div className="flex justify-center">
          <p className="text-gray-600 font-normal text-sm">
            계정이 없으신가요?
          </p>
          <Link href="/signup" className="ml-2 text-primary font-bold text-sm">
            회원가입 하기
          </Link>
        </div>
      </div>
    </div>
  );
}
*/
'use client';

import React from 'react';
import { Button, Divider, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { signIn } from '@/app/auth/signin';
import Link from 'next/link';
import Title from 'antd/es/typography/Title';
import SignInLogo from '@/components/logo/SigninLogo';

export type FieldType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Login() {
  const { Item } = Form;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-0 bg-white rounded-lg flex flex-col justify-center gap-6">
        <SignInLogo
          style={{ width: '120px', height: 'auto', margin: '0 auto' }}
        />
        <Title
          level={2}
          style={{
            fontWeight: 900,
            textAlign: 'left',
            fontSize: '1.8rem',
            marginBottom: '0',
          }}
        >
          안녕하세요!
        </Title>
        <Form
          name="basic"
          layout="vertical"
          style={{ maxWidth: '100%' }}
          initialValues={{ remember: true }}
          onFinish={signIn}
          autoComplete="off"
        >
          <Item
            name="email"
            rules={[{ required: true }, { type: 'email', warningOnly: true }]}
            style={{ marginBottom: '16px' }}
          >
            <Input
              name="email"
              placeholder="Email Address"
              size="large"
              required={true}
              style={{ width: '100%' }}
            />
          </Item>
          <Item
            name="password"
            rules={[{ required: true }]}
            style={{ marginBottom: '8px' }}
          >
            <Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              size="large"
              required={true}
              style={{ width: '100%' }}
            />
          </Item>
          <Link
            href="/forgot-password"
            className="text-primary font-normal text-sm float-right mb-4"
          >
            비밀번호를 잊으셨나요?
          </Link>
          <Button
            style={{
              backgroundColor: '#00B890',
              color: 'white',
              width: '100%',
              height: '45px',
              fontSize: '1.1rem',
              borderRadius: '4px',
            }}
            htmlType="submit"
            size="large"
          >
            Login
          </Button>
        </Form>
        <Divider />
        <div className="flex justify-center">
          <p className="text-gray-600 font-normal text-sm">
            계정이 없으신가요?
          </p>
          <Link href="/signup" className="ml-2 text-primary font-bold text-sm">
            회원가입 하기
          </Link>
        </div>
      </div>
    </div>
  );
}
