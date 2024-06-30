export default function Main (props) {

    const {data} = props

    return (
        <div className="imgContainer">
            <img src={data.url} alt={data.title || 'bg-img'} className="bgImage"/> 
        </div>
        
    )
}

/* Right now, there is an error because today's api call is a YouTube video. */