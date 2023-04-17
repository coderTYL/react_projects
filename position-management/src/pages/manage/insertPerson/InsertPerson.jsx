import { Form, Select, Input } from 'antd'
import React from 'react'

export default function InsertPerson() {
  const { Option } = Select;
  return (
    <>
      <Form>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        

        <Form.Item
          name="intro"
          label="Intro"
          rules={[
            {
              required: true,
              message: 'Please input Intro',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
      </Form>
    </>
  )
}
