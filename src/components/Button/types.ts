
export interface IButton {
    title: string;
    variant?: string;
    onClick?: () => void;
    type?: string;
    path?: string;
}

export interface IButtonStyled {
    variant: string;
}