import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

import hats from '../../images/hats.png';
import jackets from '../../images/jackets.png';
import sneakers from '../../images/sneakers.png';
import womens from '../../images/womens.png';
import mens from '../../images/men.png';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
          sections: [
            {
              title: "hats",
              //   imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
              imageUrl: hats,
              id: 1,
              linkUrl: "shop/hats",
            },
            {
              title: "jackets",
              //   imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
              imageUrl: jackets,
              id: 2,
              linkUrl: "shop/jackets",
            },
            {
              title: "sneakers",
              //   imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
              imageUrl: sneakers,
              id: 3,
              linkUrl: "shop/sneakers",
            },
            {
              title: "womens",
              imageUrl: womens,
              size: "large",
              id: 4,
              linkUrl: "shop/womens",
            },
            {
              title: "mens",
              imageUrl: mens,
              size: "large",
              id: 5,
              linkUrl: "shop/mens",
            },
          ],
        };
    }

    render() {
        return (
          <div className="directory-menu">
            {
              this.state.sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
              ))
              // this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
              //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
              // ))
            }
          </div>
        );
    }
}

export default Directory;