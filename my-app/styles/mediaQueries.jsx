import { css } from 'styled-components';

export const sizes = {
    mobileSmall: '320',
    mobileModern: '375',
    mobileLandscape: '410',
    mobileLarge: '620',
    tablet: '768',
    tabletLarge: '960',
    desktop: '1200',
    desktopLarge: '1360',
    wideScreen: '1400'
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (literals, ...args) => css`
        @media (min-width: ${emSize}em) {
            ${css(literals, ...args)};
        }
    `;

    return accumulator;
}, {});
