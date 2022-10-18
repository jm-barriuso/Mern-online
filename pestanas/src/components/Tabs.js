import React from 'react';


const Tabs = (props) => {
    
    const { tabs, setTabs} = props;

    const onClick = (choosenTable) =>{

        const activeTable = tabs.map((tab)=>{ 
            tab.name === choosenTable.name? tab.status = 'active': tab.status = '';
            return tab
        })
        setTabs(activeTable);
    }

    return (
        <div className='box-container'>
                <div className='tabs-container'>
                    {tabs.map((tab,index) => <a href='#' className={`tab ${tab.status}`} key={index} onClick={() => onClick(tab) }>{tab.name}</a> )}
                </div>
            <div className='content-container'>
                <p className='content'>
                    {tabs.filter(tab => tab.status === 'active')[0].content}
                </p>
            </div>
        </div>
    );
}

export default Tabs;
