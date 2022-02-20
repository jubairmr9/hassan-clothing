import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  AddButtonContainer,
  BgImageContainer,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  
  return (
    <CollectionItemContainer>
      <BgImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer className="name">{name}</NameContainer>
        <PriceContainer className="price">{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButtonContainer onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CollectionItem);
