import React from 'react'
import MyNavLink from '../../components/myNavLink/MyNavLink'
import { Breadcrumb } from 'antd';

export default function MyBreadCrumb() {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <MyNavLink to={'/schedule/create'} children={'新建计划'} / >
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <MyNavLink to={'/schedule/modify'} children={'修改计划'} / >
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <MyNavLink to={'/schedule/delete'} children={'删除计划'} / >
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <MyNavLink to={'/schedule/individual'} children={'全部计划'} / >
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}
