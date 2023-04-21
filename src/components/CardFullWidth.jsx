import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Unstable_Grid2 as Grid,
    CardMedia,
    CardContent,
    Typography,
    Link,
    Stack,
    Paper,
    Checkbox,
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import {
    addBookmark,
    removeBookmark,
} from '../features/bookmark/bookmarkSlice';
import PriceGroupComponent, { PercentText } from './InfoGroupComponent';

const placeholderImg = 'https://ajakgerak.franciswibisono.com/img/placeholder.png';

const CardTitle = styled(Typography)(({ theme }) => `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-family: 'Comfortaa';
  font-weight: 400;
  line-height: 1;
  min-height: 2rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  &:hover {
    color: ${theme.palette.primary.main};
  }
`);
const Content = styled(CardContent)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: .5rem;
  height: 100%;
  padding: 0;
`;
const CardTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: .5rem;
`;
const CardText = styled.div(({ theme }) => `
  font-size: 14px;
  font-weight: 300;
  font-family: 'Comfortaa';
  color: ${theme.palette.text.secondary};
`);
const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`;
const CardMediaGroup = styled.div(({ theme }) => `
  position: relative;
  display: flex;
  flex: 1 1 100%;
  background-color: #ffcdcd;
  border-radius: .5rem;
`);
const CheckboxContainer = styled(Checkbox)`
  position: absolute;
  top: 0;
  right: 0;
`;
const Media = styled(CardMedia)`
  display: block;
  border-radius: 12px;
  object-fit: contain;
  height: 220px;
`;
const RaitingWrapper = styled.div(({ theme }) => `
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex: 1 1 100%;
  background-color: transparent;
`);
// eslint-disable-next-line react/prop-types
function CardFullWidth({ data }) {
    const { volumeInfo, saleInfo } = data;
    const { listPrice, retailPrice } = saleInfo;
    const listAmount = Math.ceil(listPrice?.amount);
    const retailAmount = Math.ceil(retailPrice?.amount);
    const hasDiscount = !(listAmount === retailAmount);
    const discountPersent = Math.ceil((1 - (retailAmount / listAmount)) * 100);
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        if (!checked) {
            dispatch(addBookmark(data));
        } else {
            dispatch(removeBookmark(data));
        }
        setChecked(!checked);
    };
    return (
        <Grid item xs={12}>
            <Paper
                elevation={0}
                sx={{
                    display: "flex",
                    backgroundColor: '#f4f4f4',
                    cursor: 'pointer',
                    userSelect: "none",
                    padding: "1rem 0",
                    minHeight: "340px",
                }}
            >
                <Link
                    sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
                    href=""
                    underline="none"
                    target="_blank"
                >
                    <Content>
                        <CardMediaGroup>
                            <Media
                                component="img"
                                alt={volumeInfo?.title}
                                image={volumeInfo?.imageLinks?.thumbnail ?? placeholderImg}
                                loading="lazy"
                            />
                            <CheckboxContainer
                                icon={<FavoriteBorderOutlinedIcon color="error" />}
                                checkedIcon={<FavoriteRoundedIcon color="error" />}
                                checked={checked}
                                onChange={handleChange}
                            />
                            {hasDiscount && <PercentText variant='subtitle1'>{`-${discountPersent}%`}</PercentText>}
                        </CardMediaGroup>
                        <TitleGroup>
                            <CardTitle color="common.black" gutterBottom variant='subtitle1' component="div">
                                {volumeInfo?.title}
                            </CardTitle>
                            {volumeInfo.authors ? <CardText>{volumeInfo?.authors[0]}</CardText> : ''}
                        </TitleGroup>
                    </Content>
                    {/* <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={1}
                    >
                        <CardTextContainer>
                            {volumeInfo.authors ? <CardText>{volumeInfo?.authors[0]}</CardText> : ''}
                        </CardTextContainer>
                    </Stack> */}
                </Link>
            </Paper>
        </Grid>
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
export default CardFullWidth;
