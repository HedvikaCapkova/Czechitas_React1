import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = ({ text, onSelect }) => {
  const handleClick = () => {
    onSelect(text, text);
  };
  return (
    <a
      onClick={handleClick}
      href="#"
      className="menu-item">
      {text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(true);
  const [pageTitle, setPageTitle] = useState('Domů');

  const handleSelectItem = (menuOpened, page) => {
    setMenuOpened(!menuOpened);
    setPageTitle(page);
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
