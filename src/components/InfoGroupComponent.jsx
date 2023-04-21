import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import StarIcon from '@mui/icons-material/Star';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
const dynamicStyle = props =>
  css`
    color: ${props.color ?? 'black'};
    background-color: ${props.backgroundColor ?? 'transparent'};
  `;
const PrimeText = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-weight: 900;
  line-height: 1;
  min-height: 2rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-radius: 8px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${dynamicStyle};
`;
const SecondText = styled(PrimeText)(({ theme }) => `
  font-weight: 900;
  background-color: transparent;
  color: ${theme.palette.text.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: line-through;
`);
export const PercentText = styled(PrimeText)(({ theme }) => `
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 900;
  background-color: ${theme.palette.error.main};
  color: ${theme.palette.common.white};
`);
const Group = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1 1 100%;
`;
const ReviewGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: .5rem;
`;
const ReviewItem = styled(ReviewGroup)`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: .2rem;
`;
const TextGroup = styled(Group)`
  gap: .5rem;
`;
const ReviewText = styled(Typography)((props) => `
  color: ${props.color};
`);
const ReviewBox = styled.div((props) => `
  color: ${props.color};
`);
// eslint-disable-next-line react/prop-types
function InfoGroupComponent({ listAmount, retailAmount, hasDiscount, averageRating, ratingsCount }) {

  return (
    <Group>
      <TextGroup>
        <PrimeText color={hasDiscount ? 'common.white' : 'common.black'} backgroundColor={hasDiscount ? 'success.main' : 'transparent'} variant='subtitle1' component='div'>{hasDiscount ? retailAmount : listAmount} ₽</PrimeText>
        {hasDiscount && <SecondText variant='subtitle1' component='div'>{hasDiscount ? listAmount : retailAmount} ₽</SecondText>}
      </TextGroup>
      {averageRating && <ReviewGroup>
        <ReviewItem>
          <StarIcon color='warning' />
          <ReviewText color='warning.main'>{averageRating}</ReviewText>
        </ReviewItem>
        <ReviewItem>

          <ChatBubbleOutlineIcon color='text.secondary' />
          <ReviewText>{ratingsCount}</ReviewText>


        </ReviewItem>
      </ReviewGroup>}

    </Group>
  );
}
// Card.defaultProps = {
//   data: [],
//   index: 0,
// };
// Card.propTypes = {
//   data: PropTypes.objectOf(PropTypes.shape({
//     pubDate: PropTypes.string,
//     link: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string,
//     image_url: PropTypes.string,
//     source_id: PropTypes.string,
//   })),
// };
export default InfoGroupComponent;
