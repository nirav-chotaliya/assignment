import React from 'react';

import Tabs from '../Tabs'

import './App.css';

const tabs = [
  {
    id: 1,
    title: 'TO DO',
    data: [
      {
        header: 'Hair Appointment',
        subText: 'with Dr Shobhita Anand',
        time: 'Today, 3:30 PM'
      },
      {
        header: 'Eat Tablet - Bromide',
        subText: 'Follow up on your regime',
        time: 'Today, After Lunch'
      },
      {
        header: 'Wash Hair',
        subText: 'Use your shampoo',
        time: 'Today, Morning Bath'
      },
      {
        header: 'Moisturize',
        subText: 'Use your moisturiser',
        time: 'Before Bedtime, 28th June'
      }
    ]
  },
  {
    id: 2,
    title: 'TO READ'
  }
]

function App() {
  return (
    <div className="App">
      <header className="app-header">ACTION ITEMS</header>
      <Tabs 
        onTabClickCallBack={(i) => console.log('Selected Tab :: ', i)}
        tabs={tabs}
        defaultSelectedTab={1}
      />
    </div>
  );
}

export default App;
