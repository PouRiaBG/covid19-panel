interface News {
    title: string;
    content: string;
    src: string
}

interface ViewedNews {
    title: string;
    content: string;
    date: string
}

export type NewsListType = Array<News>
export type ViewedNewsListType = Array<ViewedNews>

