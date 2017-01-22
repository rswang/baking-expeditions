import React from 'react';

const PREVIEW_IMAGES = [
  { name: 'Strawberry Tart', url: './public/images/baking/strawberry-tart.jpg' },
  { name: 'Pumpkin Pie', url: './public/images/baking/pumpkin-pie.jpg' },
  { name: 'Caramel Apple Cake', url: './public/images/baking/caramel-apple-cake.jpg' },
  { name: 'Christmas Tree Cupcakes', url: './public/images/baking/christmas-tree-cupcakes.jpg' },
  { name: 'Sugar Cookies', url: './public/images/baking/sugar-cookies.jpg' },
  { name: 'Benchling Cake', url: './public/images/baking/benchling-cake.jpg' },
  { name: 'Macarons', url: './public/images/baking/macarons-chocolate-ganache.jpg' },
];

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className='display-flex'>
          {PREVIEW_IMAGES.map((image, i) => (
            <div className='header-image' key={i}>
              <img alt={image.name} src={image.url} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Header;
