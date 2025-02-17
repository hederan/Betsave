import { IoAnalytics } from 'react-icons/io5';
import { MdLocalOffer } from 'react-icons/md';
import { FaHistory, FaBookmark } from 'react-icons/fa';

import { IoMdHome, IoMdSettings } from 'react-icons/io';
import { SlEarphonesAlt } from 'react-icons/sl';

import { styled } from '@mui/material';

import {
  BetOffersIcon,
  BookMakerIcon,
  CashbackRateIcon,
  CheckIcon,
  GrayAbleOfferSvg,
  GrayAffiliateSvg,
  GrayLeaderboardSvg,
  GrayMyOfferSvg,
  GrayPromoOfferSvg,
  GrayRewardSvg,
  GrayWithdrawSvg,
  GreenAbleOfferSvg,
  GreenAffiliateSvg,
  GreenLeaderboardSvg,
  GreenMaxmizeWinIcon,
  GreenMyOfferSvg,
  GreenPromoOfferSvg,
  GreenRewardSvg,
  GreenSeemslessIcon,
  GreenTopTierIcon,
  GreenTransparentPayoutIcon,
  GreenWithdrawSvg,
  HighStakeBettorsIcon,
  HorseRaceIcon,
  Layer85Img,
  Layer87Img,
  Layer94Img,
  Mobile1Img,
  Mobile2Img,
  Mobile3Img,
  PayoutIcon,
  PromotionIcon,
  ReferralBonusIcon,
  SignupOfferIcon,
  SportsBetIcon,
  GreenCoin,
} from './images';

const IconImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

export const STATIC_DATA = {
  whychoose: [
    {
      img: GreenMaxmizeWinIcon,
      title: 'Maximize Your Wins',
      content:
        'Even when the odds are against you, earn guaranteed cashback on every bet.',
    },
    {
      img: GreenTopTierIcon,
      title: 'Top-Tier Partners',
      content: 'Access the best bookmakers in the industry',
    },
    {
      img: GreenSeemslessIcon,
      title: 'Seamless Experience',
      content: 'User-friendly platforms, no hidden fees, no hassle.',
    },
    {
      img: GreenTransparentPayoutIcon,
      title: 'Transparent Payouts',
      content:
        'See exactly how much you’re earning and cashout your rewards every fortnight',
    },
    {
      img: GreenTopTierIcon,
      title: 'Top-Tier Partners',
      content: 'Access the best bookmakers in the industry',
    },
    {
      img: GreenTransparentPayoutIcon,
      title: 'Transparent Payouts',
      content:
        'See exactly how much you’re earning and cashout your rewards every fortnight',
    },
    {
      img: GreenMaxmizeWinIcon,
      title: 'Maximize Your Wins',
      content:
        'Even when the odds are against you, earn guaranteed cashback on every bet.',
    },
    {
      img: GreenSeemslessIcon,
      title: 'Seamless Experience',
      content: 'User-friendly platforms, no hidden fees, no hassle.',
    },
    {
      img: GreenMaxmizeWinIcon,
      title: 'Maximize Your Wins',
      content:
        'Even when the odds are against you, earn guaranteed cashback on every bet.',
    },
    {
      img: GreenSeemslessIcon,
      title: 'Seamless Experience',
      content: 'User-friendly platforms, no hidden fees, no hassle.',
    },
  ],
  categories: [
    {
      img: SportsBetIcon,
      title: 'Sports Betting',
      content: 'Place bets on your favorite teams and earn cashback',
      action: 'Explore Cashback',
      link: '/',
    },
    {
      img: HorseRaceIcon,
      title: 'Horce Racing',
      content: 'Bet on horce races and earn big cashback.',
      action: 'Explore Racing Offers',
      link: '/',
    },
    {
      img: SignupOfferIcon,
      title: 'Sign-Up Offers',
      content: 'Join new sportsbooks and get exclusive cashback deals.',
      action: 'View Signup Offers',
      link: '/',
    },
    {
      img: HighStakeBettorsIcon,
      title: 'High-Stakes Bettors',
      content: 'Earn additional cashback rewards for higher betting volumes',
      action: 'Learn About Cashback',
      link: '/',
    },
    {
      img: ReferralBonusIcon,
      title: 'Referral Bonuses',
      content: 'Refer friends and earn cashback from their bets.',
      action: 'Start Referring',
      link: '/',
    },
    {
      img: PromotionIcon,
      title: 'Exclusive Promotions',
      content:
        'Get access to cashback offers for major sports events and races',
      action: 'View Promotions',
      link: '/',
    },
  ],
  reason: [
    {
      img: CashbackRateIcon,
      title: 'Highest Cashback Rates',
      content: 'Earn up to 7% cashback on your sports and horce racing bets.',
      link: '/',
    },
    {
      img: BetOffersIcon,
      title: 'Exclusive Betting Offers',
      content: 'Unlock exclusive partner promotions and bonuses today.',
      link: '/',
    },
    {
      img: PayoutIcon,
      title: 'Easy Payouts',
      content:
        'Withdraw your rewards instantly via PayPal, back transfer, or gift cards.',
      link: '/',
    },
  ],
  earnCashback: [
    {
      img: Mobile1Img,
      icon: BookMakerIcon,
      title: 'Choose a Bookmaker',
      content:
        'Browse our list of trusted bookmakers and sign up through our platform to unlock exclusive cashback offers!',
    },
    {
      img: Mobile2Img,
      icon: CheckIcon,
      title: 'Place Your Bets',
      content:
        'Bet as you normally would on your favorite sports and races. No extra steps or hidden fees!',
    },
    {
      img: Mobile3Img,
      icon: GreenCoin,
      title: 'Get Your Cashback',
      content:
        'Your cashback will be tracked and added to your account automatically. Withdraw anytime!',
    },
  ],
  giftcard: [
    {
      img: Layer85Img,
      icon: BookMakerIcon,
      title: 'Place Your Bets',
      content:
        'Choose your favorite bookmaker, bet on sports, horce racing, or live events. The more you bet, the more cashback you earn!',
    },
    {
      img: Layer87Img,
      icon: CheckIcon,
      title: 'Get Instant Cashback',
      content:
        'Track your earnings in real-time. Every bet earns you cashback based on our rewards tiers up to 10% for top bettors.',
    },
    {
      img: Layer94Img,
      icon: GreenCoin,
      title: 'Cash Out Anytime',
      content:
        'Withdraw your cashback easily via back transfers e-wallets, or gift cards for sportswear, race day ticket, and more.',
    },
  ],
  navListItems: [
    {
      icon: <IconImg src={GrayPromoOfferSvg} alt="nav-item-img" />,
      selectedIcon: <IconImg src={GreenPromoOfferSvg} alt="nav-item-img" />,
      name: 'Promotional Offers',
      idx: 0,
    },
    {
      icon: <IconImg src={GrayAbleOfferSvg} alt="nav-item-img" />,
      selectedIcon: <IconImg src={GreenAbleOfferSvg} alt="nav-item-img" />,
      name: 'Available Offers',
      hasBadge: true,
      idx: 1,
    },
    {
      icon: <IconImg src={GrayMyOfferSvg} alt="nav-item-img" />,
      selectedIcon: <IconImg src={GreenMyOfferSvg} alt="nav-item-img" />,
      name: 'My Offers',
      idx: 2,
    },
    {
      icon: <IconImg src={GrayWithdrawSvg} alt="nav-item-img" />,
      selectedIcon: <IconImg src={GreenWithdrawSvg} alt="nav-item-img" />,
      name: 'Withdraw',
      idx: 3,
    },
    {
      icon: <IconImg src={GrayLeaderboardSvg} alt="nav-item-img" />,
      selectedIcon: <IconImg src={GreenLeaderboardSvg} alt="nav-item-img" />,
      name: 'Leaderboard',
      idx: 4,
    },
    {
      icon: <IconImg src={GrayRewardSvg} alt="nav-item-img" />,
      selectedIcon: <IconImg src={GreenRewardSvg} alt="nav-item-img" />,
      name: 'Rewards',
      idx: 5,
    },
    {
      icon: <IconImg src={GrayAffiliateSvg} alt="nav-item-img" />,
      selectedIcon: <IconImg src={GreenAffiliateSvg} alt="nav-item-img" />,
      name: 'Affiliates',
      idx: 6,
    },
  ],
  accountListItems: [
    {
      icon: <IoMdHome style={{ width: '100%', height: '100%' }} />,
      name: 'Dashboard',
      idx: 0,
    },
    {
      icon: <FaHistory style={{ width: '100%', height: '100%' }} />,
      name: 'Cashback History',
      hasBadge: true,
      idx: 1,
    },
    {
      icon: <FaBookmark style={{ width: '100%', height: '100%' }} />,
      name: 'Bookmaker List',
      idx: 2,
    },
    {
      icon: <IoAnalytics style={{ width: '100%', height: '100%' }} />,
      name: 'Referral Program',
      idx: 3,
    },
    {
      icon: <MdLocalOffer style={{ width: '100%', height: '100%' }} />,
      name: 'Promo codes',
      idx: 4,
    },
    {
      icon: <IoMdSettings style={{ width: '100%', height: '100%' }} />,
      name: 'Account Settings',
      idx: 5,
    },
    {
      icon: <SlEarphonesAlt style={{ width: '100%', height: '100%' }} />,
      name: 'Help Center',
      idx: 6,
    },
  ],
};
