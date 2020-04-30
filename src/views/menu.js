import React from 'react';

import text from '../constants/menus.json';

const Menu = () => (
  <div>
    {text.map((menu) => (
      <section
        key={menu.header}
      >
        {menu.header}
      </section>
    ))}
  </div>
);

export default Menu;
