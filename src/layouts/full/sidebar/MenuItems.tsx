import {
  IconAperture, 
  IconLayoutDashboard, 
  IconLogin, 
  IconMoodHappy, 
  IconTrophy, 
  IconUserPlus
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'RANK',
  },
  {
    id: uniqueId(),
    title: 'Rank KCP',
    icon: IconTrophy,
    href: '/utilities/typography',
  },
  {
    id: uniqueId(),
    title: 'Rank RM Dana',
    icon: IconTrophy,
    href: '/utilities/shadow',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/authentication/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/authentication/register',
  },
  {
    navlabel: true,
    subheader: 'Input',
  },
  {
    id: uniqueId(),
    title: 'QRIS',
    icon: IconMoodHappy,
    href: '/input/qris',
  },
  {
    id: uniqueId(),
    title: 'EDC',
    icon: IconAperture,
    href: '/input/edc',
  },
  {
    id: uniqueId(),
    title: 'Kunjungan QRIS',
    icon: IconAperture,
    href: '/input/kunjungan-qris',
  },
  {
    id: uniqueId(),
    title: 'Kunjungan EDC',
    icon: IconAperture,
    href: '/input/kunjungan-edc',
  },
  {
    id: uniqueId(),
    title: 'Kunjungan Ekosistem',
    icon: IconAperture,
    href: '/input/kunjungan-ekosistem',
  },
  {
    id: uniqueId(),
    title: 'BRIMO',
    icon: IconAperture,
    href: '/input/brimo',
  },
];

export default Menuitems;
