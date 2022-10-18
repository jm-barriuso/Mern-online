import React, { useEffect, useState } from 'react';

const BoxesForm = (props) => {
    
    const [boxesInfo, setBoxesInfo] = useState({
        color:'',
        width:'',
        height:''
    });
    const {boxes, setBoxes} = props

    const onChange = (e) => {
        setBoxesInfo({
            ...boxesInfo,
            [e.target.name]:e.target.value
        })
    }
        
    const onSubmit = (e) => {
        e.preventDefault()
        setBoxes([
            ...boxes,
            boxesInfo
        ])
    }
    useEffect(() => {
        setBoxesInfo({
            color:'',
            width:'',
            height:''
        })
    
    }, [boxes]);
    return (
        
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" onChange={ onChange } value={boxesInfo.color}/>
                <label htmlFor="width">Width</label>
                <input type="text" name="width" onChange={ onChange } value={boxesInfo.width}/>
                <label htmlFor="height">Height</label>
                <input type="text" name="height" onChange={ onChange } value={boxesInfo.height}/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
}

export default BoxesForm;
