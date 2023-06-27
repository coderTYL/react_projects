import React from 'react';
import { Layout, Space } from 'antd';

const { Header, Footer, Content } = Layout;
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: '70vh',
    lineHeight: '70vh', 
    color: '#ffffff',
    backgroundColor: '#ffffff',
};


const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 64,
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const WelcomePage: React.FC = () => {
    return (
        <Space direction="vertical" style={{width: '100%', minHeight: '100%'}} size={[0, 48]}>
            <Layout>
                <Header style={headerStyle}>Header</Header>
                <Content style={contentStyle}>Content</Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Space>
    )
}
export default WelcomePage;