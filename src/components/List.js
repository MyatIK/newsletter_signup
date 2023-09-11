import iconList from '../assets/images/icon-list.svg';

function List(props){
    return(
        <div className='flex mt-3'>
            <img className='mr-2' src={iconList} alt="Icon for creating list"/>
            <p>{props.text}</p>
        </div>
    )
}

export default List;