import hats from "../../images/hats.png";
import jackets from "../../images/jackets.png";
import sneakers from "../../images/sneakers.png";
import womens from "../../images/womens.png";
import mens from "../../images/men.png";

const INITIAL_STATE = {
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
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;