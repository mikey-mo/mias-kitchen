import React from 'react';

import text from '../constants/menus.json';

const Menu = () => (
  <div className="menu__wrapper">
    {text.map((menu) => (
      <section
        key={menu.header}
        className="menu"
      >
          <h4 className="menu__header">
          {menu.header}
          </h4>
          {menu.items.map((item) => {
            return (
              <div key={item}>
                <div className="menu__items">
                  {item.name}
                  <div className="menu__items__divider" />
                  {item.price}
                </div>
                <div className="menu__items__ingredients">
                  {item.ingredients.map((ingredient, i) => {
                    return (
                      <div
                        className="menu__items__ingredients__ingredient"
                        key={ingredient}
                      >
                        {ingredient}
                        {(i !== (item.ingredients.length - 1))
                          && (
                            <span>
                              {','}
                              <span style={{ opacity: 0 }}>
                                {'k'}
                              </span>
                            </span>
                          )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
      </section>
    ))}
  </div>
);

export default Menu;
