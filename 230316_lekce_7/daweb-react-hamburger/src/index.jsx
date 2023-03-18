import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = (props, onSelect, page) => {
  const handleClick = () => {
    console.log('g');
    onSelect(page);
  };
  return (
    <a
      onClick={handleClick}
      href="#"
      className="menu-item">
      {props.text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(true);
  const [pageTitle, setPageTitle] = useState('Domů');

  const handleSelectItem = (page) => {
    setMenuOpened(false);
    setPageTitle(page);
    console.log('ahoj');
  };

  return (
    <>
      <header>
        <div className={menuOpened ? 'menu' : 'menu--closed'}>
          <button
            onClick={() => setMenuOpened(!menuOpened)}
            className="menu__btn"></button>
          <div className="menu__items">
            <MenuItem
              onSelect={handleSelectItem}
              text="Domů"
            />
            <MenuItem
              onSelect={handleSelectItem}
              text="Naše nabídka"
            />
            <MenuItem
              onSelect={handleSelectItem}
              text="Náš tým"
            />
            <MenuItem
              onSelect={handleSelectItem}
              text="Blog"
            />
            <MenuItem
              onSelect={handleSelectItem}
              text="Kontakt"
            />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
