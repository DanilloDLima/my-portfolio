declare module '@fortawesome/react-fontawesome' {
    import { IconProp } from '@fortawesome/fontawesome-svg-core';
    import { ComponentProps, JSX } from 'react';

    export interface FontAwesomeIconProps extends ComponentProps<'svg'> {
        icon: IconProp;
        mask?: IconProp;
        className?: string;
        style?: React.CSSProperties;
        spin?: boolean;
        pulse?: boolean;
        border?: boolean;
        fixedWidth?: boolean;
        inverse?: boolean;
        flip?: 'horizontal' | 'vertical' | 'both';
        size?: 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
        rotation?: 90 | 180 | 270;
        pull?: 'left' | 'right';
        transform?: string;
        symbol?: boolean | string;
    }

    export class FontAwesomeIcon extends React.Component<FontAwesomeIconProps> {}
}
