import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  styled,
  Typography,
} from '@mui/material';
import LogoImg from '../assets/Betsave-logo.png';
import MobileLogoImg from '../assets/mobile-betsave-logo.png';
import EarnIcon from '../assets/earn.png';
import CashoutIcon from '../assets/cashout.png';
import { IconInput } from '../components/input/IconInput';
import { Menu, Search } from '@mui/icons-material';
import { LuUserRound } from 'react-icons/lu';
import { AiOutlineKey } from 'react-icons/ai';

export const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);
  const id = isOpen ? 'simple-popover' : undefined;

  const handleSearch = (value: string) => {
    setSearchText(value);
  };
  return (
    <Container>
      <Wrapper>
        <DesktopLogoImage
          src={LogoImg}
          alt="betsave-logo"
          width={'180px'}
          height={'auto'}
        />
        <MobileLogoImage
          src={MobileLogoImg}
          alt="betsave-logo"
          width={'42px'}
          height={'auto'}
        />
        <VerticalDivider orientation="vertical" />
        <Content>
          <LinkItemContainer>
            <LinkItem>
              <Icon src={EarnIcon} alt="earn-icon" />
              Earn
            </LinkItem>
            <LinkItem>
              <Icon src={CashoutIcon} alt="cashout-icon" />
              Cashout
            </LinkItem>
          </LinkItemContainer>
          <ActionContainer>
            <IconInput
              type="text"
              placeholder="Search for offers..."
              name="search"
              value={searchText}
              setValue={handleSearch}
              icon={<Search sx={{ color: '#627691' }} />}
            />
            <ButtonContainer>
              <ActionButton
                variant="contained"
                startIcon={<LuUserRound />}
                sx={{ backgroundColor: '#172236', color: '#fff' }}
              >
                Sign In
              </ActionButton>
              <ActionButton
                variant="contained"
                startIcon={<AiOutlineKey />}
                sx={{ backgroundColor: '#1ae5a1', color: '#000' }}
              >
                Sign Up
              </ActionButton>
            </ButtonContainer>
          </ActionContainer>
          <MobileAction>
            <MobileWrapper>
              <IconInput
                type="text"
                placeholder="Search for offers..."
                name="search"
                value={searchText}
                setValue={handleSearch}
                icon={<Search sx={{ color: '#627691' }} />}
              />
            </MobileWrapper>
            <IconButton size="medium" onClick={handleClick}>
              <Menu fontSize="inherit" />
            </IconButton>
            <Popover
              id={id}
              open={isOpen}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              sx={{ marginTop: '20px' }}
            >
              <PopoverContainer>
                <ButtonContainer>
                  <ActionButton
                    variant="contained"
                    startIcon={<LuUserRound />}
                    sx={{ backgroundColor: '#172236', color: '#fff' }}
                  >
                    Sign In
                  </ActionButton>
                  <ActionButton
                    variant="contained"
                    startIcon={<AiOutlineKey />}
                    sx={{ backgroundColor: '#1ae5a1', color: '#000' }}
                  >
                    Sign Up
                  </ActionButton>
                </ButtonContainer>
                <TabletWrapper>
                  <IconInput
                    type="text"
                    placeholder="Search for offers..."
                    name="search"
                    value={searchText}
                    setValue={handleSearch}
                    icon={<Search sx={{ color: '#627691' }} />}
                  />
                </TabletWrapper>
              </PopoverContainer>
            </Popover>
          </MobileAction>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
}));

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '82px',
  borderRadius: '10px',
  backgroundColor: '#0f1629',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  margin: '30px',
  [theme.breakpoints.down(1024)]: {
    margin: '20px',
    padding: '10px',
    height: '62px',
  },
}));

const DesktopLogoImage = styled('img')(({ theme }) => ({
  marginLeft: '20px',
  cursor: 'pointer',
  [theme.breakpoints.down(1024)]: {
    display: 'none',
  },
}));

const MobileLogoImage = styled('img')(({ theme }) => ({
  marginLeft: '10px',
  cursor: 'pointer',
  display: 'none',
  [theme.breakpoints.down(1024)]: {
    display: 'block',
  },
  [theme.breakpoints.down(450)]: {
    marginLeft: '0',
  },
}));

const VerticalDivider = styled(Divider)(({ theme }) => ({
  margin: '0 35px',
  [theme.breakpoints.down(1240)]: {
    margin: '0 20px',
  },
  [theme.breakpoints.down(450)]: {
    margin: '0 10px',
  },
}));

const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '10px',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down(1240)]: {
    marginLeft: '4px',
  },
}));

const LinkItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 'bold',
  color: '#627691',
  fontSize: '16px',
  cursor: 'pointer',
  [theme.breakpoints.down(1240)]: {
    fontSize: '14px',
  },
}));

const Icon = styled('img')(({ theme }) => ({
  width: '22px',
  height: 'auto',
  color: '#1AE5A1',
  [theme.breakpoints.down(1240)]: {
    width: '18px',
  },
}));

const LinkItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  [theme.breakpoints.down(1240)]: {
    gap: '20px',
  },

  [theme.breakpoints.down(450)]: {
    gap: '10px',
  },
}));

const ActionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '36px',
  height: '100%',
  [theme.breakpoints.down(1240)]: {
    gap: '20px',
  },
  [theme.breakpoints.down(840)]: {
    display: 'none',
  },
}));

const MobileAction = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down(840)]: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    height: '100%',
  },
}));

const MobileWrapper = styled(Box)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.down(640)]: {
    display: 'none',
  },
}));

const TabletWrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down(640)]: {
    display: 'block',
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  height: '100%',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  height: '100%',
  fontWeight: 'bold',
}));

const PopoverContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '15px',
  backgroundColor: '#141c30',
}));