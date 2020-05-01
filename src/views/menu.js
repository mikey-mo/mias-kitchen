import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import text from '../constants/menus.json';

const Menu = () => (
  <div className="menu__wrapper">
    {text.map((menu) => (
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce
        duration={1}
        key={menu.header}
        className="menu"
      >
          <h4 className="menu__header">
          {menu.header}
          </h4>
          {menu.items.map((item) => {
            return (
              <div
                key={item}
              >
                <div className="menu__items">
                  <span className="menu__items__name">
                    {item.name}
                  </span>
                  <div className="menu__items__divider" />
                  <span className="menu__items__price">
                    {item.price}
                  </span>
                </div>
                <div className="menu__items__ingredients">
                  {item.ingredients.map((ingredient, i) => {
                    return (
                      <span
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
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
      </ScrollAnimation>
    ))}
  </div>
);

export default Menu;
