import React from 'react';
import { Link } from 'react-router';

const PREVIEW_IMAGES = [
  { name: 'Strawberry Tart', url: '/images/baking/strawberry-tart.jpg' },
  { name: 'Pumpkin Pie', url: '/images/baking/pumpkin-pie.jpg' },
  { name: 'Caramel Apple Cake', url: '/images/baking/caramel-apple-cake.jpg' },
  { name: 'Christmas Tree Cupcakes', url: '/images/baking/christmas-tree-cupcakes.jpg' },
  { name: 'Sugar Cookies', url: '/images/baking/sugar-cookies.jpg' },
  { name: 'Benchling Cake', url: '/images/baking/benchling-cake.jpg' },
  { name: 'Macarons', url: '/images/baking/macarons-chocolate-ganache.jpg' },
];

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to='/' className='header-heading'>
          <span>Baking</span>
          <span className='light'>Expeditions</span>
        </Link>
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
