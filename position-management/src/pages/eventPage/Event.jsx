import { SearchOutlined, PlusOutlined, ZoomInOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Form, Modal, Select, DatePicker, InputNumber } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import React from 'react';

const { TextArea } = Input;

const data = [

]

export default function Event() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      };
      const onOk = (value) => {
        console.log('onOk: ', value);
      };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        搜索
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        重置
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        关闭
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    let eventDetail = () => {
        return '查看事件详情'
    }
    const columns = [
        {
            title: '事件编号',
            dataIndex: 'eventID',
            key: 'eventID',
            align: 'center',
            ...getColumnSearchProps('eventID'),
            /* sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'], */
        },
        {
            title: '日期',
            dataIndex: 'date',
            key: 'date',
            align: 'center',
            width: '15%',
            ...getColumnSearchProps('date'),
            /* sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'], */
        },
        {
            title: '维度',
            dataIndex: 'dimensionID',
            key: 'dimensionID',
            width: '10%',
            align: 'center',
            /* sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'], */
        },
        {
            title: '员工号',
            dataIndex: 'employeeID',
            key: 'employeeID',
            width: '10%',
            align: 'center',
            ...getColumnSearchProps('employeeID'),
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: '10%',
            align: 'center',
            ...getColumnSearchProps('name'),
        },
        {
            title: '岗位',
            dataIndex: 'position',
            key: 'position',
            width: '10%',
            align: 'center',
            ...getColumnSearchProps('position'),
        },
        {
            title: '部门',
            dataIndex: 'departmentID',
            key: 'departmentID',
            width: '10%',
            align: 'center',
            ...getColumnSearchProps('departmentID'),
        },
        {
            title: "操作",
            align: 'center',
            key: "action",
            render: (_, record) => {
                return data.length >= 1 ? (
                    <Space>
                        <Button type='primary' icon={<ZoomInOutlined />} size='small' onClick={() => { eventDetail(record.eventID) }}>详情</Button>
                    </Space>) : null
            }
        }
    ];

    const formRef = useRef();
    const [open, setOpen] = useState(false);
    let showModal = () => {
        setOpen(true);
    };
    let handleOk = (info) => {
        setOpen(false);
    };
    let handleCancel = () => {
        setOpen(false);
    };
    const onFinish = (value)=>{
        // modal 中添加事件
    }
    const onReset = () => {
        formRef.current.resetFields();
    };

    return (
        <Space direction='vertical' style={{ minWidth: '100%', minHeight: '100%' }}>
            <div>
                <Button
                    type='primary'
                    size='large'
                    icon={<PlusOutlined />}
                    onClick={showModal}
                >新增事件</Button>
                <Modal
                    title="填写事件信息"
                    open={open}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <Form
                        ref={formRef}
                        preserve={false}
                        labelCol={{ span: 6, }}
                        wrapperCol={{ span: 14, }}
                        layout='horizontal'
                        style={{maxWidth: 600 }}
                        onFinish={onFinish}
                    >
                        <Form.Item name={'employeeID'} label="员工号" required>
                            <Input />
                        </Form.Item>
                        <Form.Item name='name' label="姓名" required>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'date'} label= '日期' required>
                        <DatePicker />
                        </Form.Item>

                        <Form.Item name={'dimensionID'} label="维度" required>
                            <Select>
                                <Select.Option value="A">工作作风</Select.Option>
                                <Select.Option value="B">标准落实</Select.Option>
                                <Select.Option value="C">运行管理</Select.Option>
                                <Select.Option value="D">特情处置</Select.Option>
                                <Select.Option value="E">传帮带</Select.Option>
                                <Select.Option value="F">重点工作推进</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name={'typeID'} label='类型序号' required>
                            <InputNumber min={1} />
                        </Form.Item>

                        <Form.Item name={'description'} label="事件描述" >
                            <TextArea rows={3} />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{ offset: 4 }}
                        >
                            <Button htmlType="button" danger onClick={onReset}>重置</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            <Table columns={columns} dataSource={data} />
        </Space>
    )
}
