// const {data} = props;
export const SeriesCard = ({data}) =>{
    const {name, id, img_url, rating, description, cast, genre, watch_url} = data;
    console.log('props-->',data);
    // const {data} = props;

    // using obejct:
    const btnStyle = {
        backgroundColor: 'red',
        color: '#fff',
        border: 'none',
        padding: '8px 15px',
        borderRadius: '30px',
        fontWeight: '600',
        marginLeft: '0.7rem',
        marginBottom: '0.7rem'
    }
    return (
        <li className='card'>
            <img src={img_url} alt={name} className="img-responsive" />
            <div className="card-content">
                <h2>Name: {name}</h2>
                <h3>Rating: {rating}</h3>
                {/* using inline css */}
                {/* <p style={{margin:'0.8rem 0'}}><b>Description:</b> {description}</p> */}
                <p><b>Description:</b> {description}</p>
                <p><b>Genre:</b> {genre}</p>
                <p><b>Cast:</b> {cast}</p>
                
            </div>
            <a href={watch_url} target="_blank">
                    <button style={btnStyle}>Watch Now</button>
                </a>
        </li>
    )
}