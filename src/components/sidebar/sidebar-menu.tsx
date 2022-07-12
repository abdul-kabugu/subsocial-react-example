import Image from '../common/image/Image';
import React from 'react';
import { ItemType } from '../../models/sidebar';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
//import {StorefrontOutlined, AnnouncementOutlined, BugReportOutlined} from '@mui/icons-material'
  import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined';
import AnnouncementOutlined from '@mui/icons-material/AnnouncementOutlined';
import BugReportOutlined from '@mui/icons-material/BugReportOutlined';

export const frameworks: ItemType[] = [
  {
    name: 'Marketplace',
    icon: <StorefrontOutlined />,
    href: '/',
  },
  {
    name: 'Blog',
    icon: <AnnouncementOutlined />,
    href: '/',
  },
];

export const additional: ItemType[] = [
  {
    name: 'Privacy',
    icon: (
      <Image
        src={'/privacy.png'}
        alt={'privacy'}
        width={20}
        height={20}
      />
    ),
    href: '/',
  },

 
  {
    name: 'Terms of use',
    icon: <DescriptionOutlinedIcon />,
    href: '/',
  },
 
  {
    name: 'FAQs',
    icon: <HelpOutlineIcon />,
    href: '/',
  },
  {
    name: 'Report bugs',
    icon: <BugReportOutlined />,
    href: '/',
  },
];

export const social: ItemType[] = [
  {
    name: 'Twitter',
    icon: <Image src={'/twitter.svg'} alt={'Twitter'} width={15} height={15} />,
    href: 'https://twitter.com/KabuguAbdul',
  },
  {
    name: 'Discord',
    icon: <Image src={'/discord.svg'} alt={'Discord'} width={15} height={15} />,
    href: 'https://twitter.com/KabuguAbdul',
  },
  {
    name: 'Telegram',
    icon: (
      <Image src={'/telegram2.svg'} alt={'Telegram'} width={15} height={15} />
    ),
    href: 'https://t.me/debble_official',
  },
  {
    name: 'Megaphone',
    icon: (
      <Image src={'/megaphone.svg'} alt={'Megaphone'} width={15} height={15} />
    ),
    href: 'https://t.me/debble_official',
  },
];
