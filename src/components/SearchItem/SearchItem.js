import './searchItem.scss';

//images
import vector from './search.svg';

const SearchItem = () => {
    return ( 
        <div className="search-item">
            <h3 className="search-item__title">Flights</h3>

            <p className="search-item__text">Search Flights & Places Hire to our most popular destinations</p>

            <button className="search-item__btn"> <img src={vector} alt="" className="search-item__btn-img" /> Show Filghts</button>
        </div>
     );
}
 
export default SearchItem;