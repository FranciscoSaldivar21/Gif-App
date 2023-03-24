import '../style.css';

export const GifItem = ({gif}) => {
  return (
    <div className="card">  
        <p>{gif.title}</p>
        <img alt={gif.title} src={gif.url}></img> 
    </div>
  )
}
