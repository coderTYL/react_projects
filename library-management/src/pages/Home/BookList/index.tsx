import { Card, Row, Col, Button, Popconfirm } from "antd";
import Meta from "antd/es/card/Meta";
import {PlusOutlined} from '@ant-design/icons';
import { Book } from "../../../myTypes/myTypes";

function confirmHandler():void {
    console.log('确认删除');
    
}
function cancelHandler(): void {
    console.log('取消删除');
    
}

function getBookCard(book: Book) {
    return (
        <Col span={8} key={book.name}>
        <Card
            hoverable={true}
            cover={
                <img src={book.cover} alt="书本封面" />
            }
            actions={[
                <Popconfirm
                    title='是否确认删除'
                    onConfirm={confirmHandler}
                    onCancel={cancelHandler}
                    okText='是'
                    cancelText='否'
                >
                   <Button type="default" danger size="small">删除</Button>
                </Popconfirm>
            ]}
        >
            <Meta
                title={book.name}
                description={
                    `作者： ${book.author}` + '\n' + `字数： ${book.numberOfWords}`
                }
                />
        </Card>
        </Col>
    )
}

const BookList: React.FC = () => {
    const bookList: Book[] = [
        {
            name: '丰乳肥臀',
            author: '莫言',
            date: new Date('2020/03/01'),
            articleType: '小说',
            numberOfWords: 565000,
        },
        {
            name: '人生海海',
            author: '麦加',
            date: new Date('2019/05/01'),
            articleType: '小说',
            numberOfWords: 230000,
        }
    ]
    return (
        <Card 
            title={'图书列表'} 
            style={{ height: '100%', width: '100%' }}
            extra={<Button type="primary" icon={<PlusOutlined />}>添加书籍</Button>}
        >
            <Row gutter={[16, 16]}>
                    {bookList.map(getBookCard)}
            </Row>
        </Card>
    )
}

export default BookList;