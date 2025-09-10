
const Service = ({ id, icon, title, text, onDelete }) => {
  const handleDelete = () => {
    onDelete(id); 
  };

  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
        <button onClick={handleDelete} className="delete-button">not interested</button>
      </div>
    </article>
  )
}
export default Service