import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import EmptyPlaceholder from './EmptyPlaceholder';
import CardFullWidth from './CardFullWidth';

// eslint-disable-next-line react/prop-types
function CardsData({ cards, emptyText, type }) {
  if (cards?.length === 0) {
    return <EmptyPlaceholder emptyText={emptyText} />;
  }
  if (type === "list") {
    return cards?.map((el) => <CardFullWidth key={el.id} data={el} />)
  }
  if (type === "module") {
    return cards?.map((el) => <Card key={el.id} data={el} />)
  }
}
CardsData.defaultProps = {
  cards: [],
  emptyText: 'Нет данных',
};
CardsData.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    pubDate: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
    source_id: PropTypes.string,
  })),
  emptyText: PropTypes.string,
};
export default React.memo(CardsData);
