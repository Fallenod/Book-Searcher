import React from 'react';

import {
  Unstable_Grid2 as Grid,
  Container,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import footer from '../content/footer.png';
import Logo from './Logo';
import DotgridBlock from './DotgridBlock';
import DotgridRect from './DotgridRect';
import BorderedgridBlock from './BorderedgridBlock';

const footerData = {
  info: {
    description: "Читайте вместе с нами",
    street: "50 лет Победы, д.45",
    phone: "Тел: 123-456-678",
  },
  socialList: [
    {
      name: "HeadHunter",
      url: "#",
    },
    {
      name: "Github",
      url: "#",
    },
    {
      name: "Linkedin",
      url: "#",
    },
  ],
  infoList: [
    {
      name: "О нас",
      url: "#",
    },
    {
      name: "Блог",
      url: "#",
    },
    {
      name: "Галерея",
      url: "#",
    },
    {
      name: "Контакты",
      url: "#",
    },
  ],
  copyright: {
    text: "Copyright © 2023 Powered by Google Book API.",
  }
}

const FooterInner = styled(Grid)(({ theme }) => (
  {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "491px",
    width: "100%",
    margin: "2.5rem 0",
    padding: "5rem 2rem 2rem 2rem",
    borderRadius: "35px",
    backgroundImage: `url(${footer})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    userSelect: "none",
  }

));
const InfoText = styled(Typography)(
  {
    fontFamily: 'Comfortaa',
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "26px"
  }
);
const List = styled.ul(({ theme }) => (
  {
    all: "unset",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  }
));
const Item = styled.li(
  {
    all: "unset",
    fontSize: "20px",
    fontFamily: 'Comfortaa',
    fontWeight: 400,
    lineHeight: "26px",
    cursor: "pointer",
  }
);
const ItemTitle = styled(Item)(
  {
    fontWeight: 900,
  }
);
function Footer() {
  return (
    <Container component="footer" maxWidth="xl">
      <FooterInner container>
        <Grid item container xs={12} spacing={{ xs: 7, sm: 0 }} justifyContent="space-between" flexGrow={1} flexDirection={{ xs: "column", sm: "row" }}>
          <Grid item container xs={6} alignItems="stretch">
            <Grid item container flexDirection="column" sx={{ gap: "2rem" }} xs={12}>
              <Logo />
              <InfoText>{footerData.info.description}</InfoText>
              <div>
                <InfoText>{footerData.info.street}</InfoText>
                <InfoText>{footerData.info.phone}</InfoText>
              </div>
            </Grid>
          </Grid>
          <Grid item container justifyContent={{ xs: "start", lg: "center" }} alignItems="stretch" xs={12} sm={6}>
            <Grid item container sx={{ width: { sm: "80%" }, zIndex: "2" }} xs={12} sm={6} flexDirection={{ xs: "column", sm: "row" }} spacing={5}>
              <Grid item container xs={12} sm={6} justifyContent={{ xs: "center" }} >
                <List>
                  <ItemTitle>Компания</ItemTitle>
                  {footerData.infoList && footerData.infoList.map((item) => (
                    <Item>{item.name}</Item>
                  ))}
                </List>
              </Grid>
              <Grid item container xs={12} sm={6} justifyContent={{ xs: "center" }}>
                <List>
                  <ItemTitle>Социальные сети</ItemTitle>
                  {footerData.socialList && footerData.socialList.map((item) => (
                    <Item>{item.name}</Item>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <InfoText sx={{ padding: { xs: "2rem 0 9rem 0", sm: "9px 0" } }}>{footerData.copyright.text}</InfoText>
        </Grid>
        <DotgridBlock />
        <DotgridRect />
        <BorderedgridBlock />
      </FooterInner>
    </Container>
  );
}

export default Footer;
