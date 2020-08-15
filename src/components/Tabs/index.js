import React, { useState } from 'react'
import Card from '../Card'
import NoDataFound from '../NoDataFound'

import './style.css'

const Tabs = ({
    tabs = [],
    onTabClickCallBack,
    defaultSelectedTab,

}) => {

    const [ selectedTab, setSelectedTab ] = useState(defaultSelectedTab || 1)

    const onTabClick = id => {
        setSelectedTab(id)
        onTabClickCallBack && onTabClickCallBack(id)
    }

    const renderTabData = () => {
        const tabData = tabs.find(i => i.id === selectedTab)

        return (
            tabData.data && tabData.data.length > 0 ? 
            tabData.data.map(i => <Card {...i} />) :
            <NoDataFound />
        )
    }

    return (
        <div className='tabs-container'>
            <div className='tabs-list'>
                {
                    tabs.map(i =>
                        <div 
                            id={i.id}
                            className={`tab ${i.id === selectedTab ? 'selected' : ''}`}
                            onClick={() => onTabClick(i.id)}
                        >
                            {i.title}
                        </div>)
                }
            </div>
            <div className='tabs-data'>
                {renderTabData()}
            </div>
        </div>
    )
}

export default Tabs
