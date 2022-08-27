export type User = {
    id?: number,
    name: string,
    nickname: string,
    email: string
}

export type Task = {
    title: string,
    description: string,
    limit_date: string,
    creator_user_id: number,
    creator_user_nickname: string,
    status?: string
}