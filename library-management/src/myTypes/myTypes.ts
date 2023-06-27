interface Book {
    name: string,
    author: string,
    date: Date,
    articleType: '历史' | '军事' | '教育' | '体育' | '科技' | '小说',
    numberOfWords: number,
    cover?: string
}

export type {Book}
