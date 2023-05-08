import './itemlistcontainer.css';
import arrayProductos from '../Products/Products';
import '../Card/Card'
import Card from '../Card/Card';



function ItemListContainer(){
            
     console.log(arrayProductos)
    
    return (
                <div>
                    ItemListContainer
                    {arrayProductos.map((cardInArray) => (
                    <Card key={cardInArray.id} {...cardInArray} />
                    ))}
                </div> 
                 
                );
            }

export default ItemListContainer;