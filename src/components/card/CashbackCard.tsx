import { Box, styled, Typography } from "@mui/material";

interface CashbackCardProps {
  img: string;
}

export const CashbackCard = (props: CashbackCardProps) => {
  const { img } = props;
  return (
    <CashbackCardContainer img={img}>
      {/* <Img src={img} alt="card-img" /> */}
      {/* <CashbackCardTitle>Bet</CashbackCardTitle>
      <CashbackCardText>$1,000/month</CashbackCardText>
      <CashbackCardSubTitle>
        <span>1%</span> cashback
      </CashbackCardSubTitle> */}
    </CashbackCardContainer>
  );
};

const CashbackCardContainer = styled(Box)<{ img: string }>(
  ({ theme, img }) => ({
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "375px",
    // backgroundColor: '#141c30',
    // background:
    //   'radial-gradient(circle at 50% 100%, rgba(14, 247, 169, 0.3) 0%, #0F3D3E 10% 10%, #141c30)',
    backgroundImage: `url(${img})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    gap: "6px",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down(1024)]: {
      height: "320px",
    },
    [theme.breakpoints.down(870)]: {
      height: "280px",
    },
    [theme.breakpoints.down(768)]: {
      height: "420px",
    },
    [theme.breakpoints.down(640)]: {
      height: "360px",
    },
    [theme.breakpoints.down(480)]: {
      height: "280px",
    },
    [theme.breakpoints.down(390)]: {
      height: "220px",
    },
  }),
);

const CashbackCardTitle = styled(Typography)(({ theme }) => ({
  color: "#627691",
  fontSize: "20px",
  [theme.breakpoints.down(960)]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down(390)]: {
    fontSize: "16px",
  },
}));

const CashbackCardText = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  color: "#1ae5a1",
  fontWeight: "bold",
  [theme.breakpoints.down(960)]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down(390)]: {
    fontSize: "24px",
  },
}));

const CashbackCardSubTitle = styled(Typography)(({ theme }) => ({
  color: "#627691",
  fontSize: "20px",
  span: {
    color: "#fff",
  },
  [theme.breakpoints.down(960)]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down(390)]: {
    fontSize: "16px",
  },
}));

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "cover",
}));
