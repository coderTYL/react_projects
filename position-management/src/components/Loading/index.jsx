import { Alert, Space, Spin } from 'antd';
const Loading = () => (
    <Space
        direction="vertical"
        style={{
            width: '100%',
        }}
    >
            <Spin tip="加载中，请稍等！" size="large">
                <div className="content" style={{
                    padding: 50,
                }} />
            </Spin>
    </Space>
);
export default Loading;