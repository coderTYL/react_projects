import { isVisible } from "@testing-library/user-event/dist/utils";
import { Button, Divider, List, Typography } from "antd";
import { useState } from "react";

const data = [
    {
        index: 0,
        content:'Racing car sprays burning fuel into crowd.',
    },{
        index: 1,
        content:'Man charged over missing wedding girl.',
    },{
        index: 2,
        content: 'Los Angeles battles huge wildfires.',
    }
];


const NotificationPage: React.FC = () => {
    const [isVisible, setIsVIsible] = useState<'visible'| 'hidden' >("hidden");
    let mouseEnter = ()=>{
        setIsVIsible('visible');
    }
    let mouseLeave = ()=>{setIsVIsible('hidden')}
    return (
        <>
            <Divider orientation="left" >系统消息</Divider>
            <List
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} actions={[<Button size="small" danger style={{visibility: isVisible}}>删除</Button>]}>
                        <Typography.Text mark>[{item.index}]</Typography.Text> {item.content}
                    </List.Item>
                )}
            />
        </>
    )

};
export default NotificationPage;