import '~/styles/global.scss';
import '~/styles/style.scss';

import Logo from '~/images/icons8-typescript-48.png';
import LogoSvg from '~/images/svg/icons8-typescript.svg';

import { Component } from '@/components';

console.log('index.ts', process.env, process.env.NODE_ENV);

const appEl = document.querySelector('#app');

const component: Component = new Component();
appEl.appendChild(component.element);
