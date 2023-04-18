import { Form, InputNumber,Input, Popconfirm, Table, Typography, Button, Modal, Select, Space } from 'antd';
import { useEffect, useState, useRef } from 'react';
import { typeApi } from '../../api/typeApi';
import TextArea from 'antd/es/input/TextArea';


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `请输入 ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const TypeList = (props) => {
  const originData = [];
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;

  useEffect(
    ()=>{
    typeApi({dimensionID: props.dimensionID}).then(
      (data)=>{
      let array = data.data.map(
        (item)=>{
          return {
            key: `${item.dimensionID + item.id}`,
            id: item.id,
            dimensionID: item.dimensionID,
            definition: item.definition,
            score: item.score,
          }
        }
        );
        setData(array);
      }
      );
    }, [props]
  );

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const formRef = useRef();
  let showModal = () => {
    setOpen(true);
  };
  let handleOk = (info) => {
    setConfirmLoading(true);
   // 此处上传数据
   // 设置类型自动获取
    setOpen(false);
  };
  let handleCancel = () => {
    setOpen(false);
  };
  const onReset = () => {
    formRef.current.resetFields();
  };

  const edit = (record) => {
    form.setFieldsValue({
      id: '',
      dimensionID: '',
      definition: '',
      score: '',
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      width: '10%',
      editable: true,
    },
    {
      title: '维度类型',
      dataIndex: 'dimensionID',
      width: '10%',
      editable: true,
    },
    {
      title: '定义',
      dataIndex: 'definition',
      width: '60%',
      editable: true,
    },
    {
      title: '分值',
      dataIndex: 'score',
      width: '10%',
      editable: true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Typography.Link>
            <Popconfirm title="确认取消吗？" onConfirm={cancel}>
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            编辑
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'id' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Space direction='vertical'>
    <Button
        onClick={showModal}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        添 加
      </Button>
      <Modal
          title="请填写类型信息"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form
            ref={formRef}
            labelCol={{span: 6,}}
            wrapperCol={{span: 14,}}
            layout='horizontal'
            style={{maxWidth: 600}}
          >
            <Form.Item name={'id'} label="序号" required>
              <Input />
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
            <Form.Item name={'definition'} label="定义" required>
              <TextArea rows={3} />
            </Form.Item>

            <Form.Item name={'score'} label="分值" required>
              <Input />
            </Form.Item>
            <Form.Item 
              wrapperCol={{offset: 4}}
            >
              <Button htmlType="button" danger onClick={onReset}>重置</Button>
            </Form.Item>
          </Form>
        </Modal>
    <Form form={form} component={false} >
      
      <Table
        style={{
          minWidth: '100%',
          minHeight: '100%'
        }}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
    </Space>
  );
};
export default TypeList;

