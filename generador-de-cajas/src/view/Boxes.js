import React  from 'react';

const Boxes = ({boxes}) => {

    return (
        <div className= 'boxes'>
            <h1>cajas</h1>
            {boxes.map((box,index) => <div 
            className='box'
            key={index}
            style={{
                    backgroundColor:box.color,
                    width:parseInt(box.width),
                    height:parseInt(box.height)}}>
        </div>)
            }
        </div>
            
    );
}
export default Boxes;
