import React, {memo, useEffect, useState} from 'react'
import {Button, Form, Input, Select} from 'antd'
import RichEditor from "@/components/RichEditor";
import axios from "axios";

const File = memo(() => {
    const [form] = Form.useForm();
    const [category, setCategory] = useState([]);
    const service = axios.create({
        baseURL: '/api',
        timeout: 5000
    })
    const submit = () => {
        form.validateFields().then(res => {
            service.post('/blog/add', {...res}).then(res => {
                console.log(res)
            })
        })
    }

    useEffect(() => {
        service.get('/blog/category').then(res => {
            setCategory(res?.data || [])
        })
    }, []);

  return (
    <div className={'p-6 h-screen pb-0 pt-0 !overflow-y-hidden'}>
        <Form form={form}>
            <div className={'flex gap-4 justify-between'}>
                <Form.Item className={'w-[500px]'} required name="title">
                    <Input placeholder={"请输入文章标题"}/>
                </Form.Item>
                <Form.Item className={'w-[280px]'} required name="categorys">
                    <Select
                      mode="multiple"
                      placeholder={'选择分类'}
                      options={category?.map((item:any) => ({value: item.id, label: item.name}))}
                    />
                </Form.Item>
                <Button type="primary" onClick={submit}>发布</Button>
            </div>
            <Form.Item className={'!mb-0'} required name="content">
                <RichEditor height={'calc(100vh - 80px)'} />
            </Form.Item>
        </Form>
    </div>
  )
})

export default File