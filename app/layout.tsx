'use client';

import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <AntdRegistry>
          <Layout
            style={{
              minHeight: '100vh',
              backgroundColor: '#f0f2f5',
            }}
          >
            <Content
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '24px',
              }}
            >
              <div
                style={{
                  width: '600px',
                  padding: '24px',
                  minHeight: 'calc(100vh - 100px)',
                  backgroundColor: `${pathname === '/' ? '#00B890' : '#fff'}`,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                }}
              >
                {children}
              </div>
            </Content>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
