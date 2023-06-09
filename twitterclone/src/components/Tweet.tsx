interface TweetProps {
    user: string
    children: string
    likes?: number
}

export function Tweet(props: TweetProps) {
    return(
        <div className='tweet'>
            <strong>
                {props.user}
            </strong>
            <p>{props.children}</p>
             <button>Tweet {props.likes ?? 0}</button>
        </div>
    )
}