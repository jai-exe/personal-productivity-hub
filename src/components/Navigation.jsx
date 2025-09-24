import React from 'react';
import './Navigation.css';

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bottom-nav">
      <button 
        className={activeTab === 'money' ? 'active' : ''}
        onClick={() => setActiveTab('money')}
      >
        Money
      </button>
      <button 
        className={activeTab === 'habit' ? 'active' : ''}
        onClick={() => setActiveTab('habit')}
      >
        Habits
      </button>
    </nav>
  );
};

export default Navigation;