
import ItemCard from "../itemCard";
import './index.scss';

const RenderItemsOnly = ({ exibir = []}) => {
    return (
        <div className="item-list">
            {exibir.map((item, index) => (
                <ItemCard key={index} item={item} />
            ))}
        </div>
    );
};

export default RenderItemsOnly;