import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import logo from './vsystems-main.png';
import logoWhite from './vsystems-white.png';


export const Eaton = (props: SvgIconProps): JSX.Element => (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
        <path d="M8.12,10.15l.53,1.92H7.55Zm-1,3.26L6.67,15H9.5l-.45-1.59ZM14.55,9H9.11v1.71h1.72V15h2.76a3.44,3.44,0,0,1-1.34-2.77A3.26,3.26,0,0,1,14.55,9m.95,4.46a1.17,1.17,0,0,0,1.15-1.2A1.22,1.22,0,0,0,15.52,11a1.25,1.25,0,0,0-1.17,1.28,1.15,1.15,0,0,0,1.15,1.2m5.71-.69L20.1,9H17.27v6H19V11.24h0L20.15,15H23V9H21.22v3.77ZM4.42,15l.51-1.68H3v-.51H5.09l.49-1.61H3v-.49H5.72L6.23,9H1v6Z" />
    </SvgIcon>
);

export const Vsys = (): JSX.Element => (
    <img style={{height: 60}} src={logo} alt="Logo" />
);

export const VsysWhite = (): JSX.Element => (
    <img style={{height: 75}} src={logoWhite} alt="Logo" />
);
