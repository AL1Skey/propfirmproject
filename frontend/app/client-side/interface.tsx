
interface CardsProps {
    mode: string|undefined;
    image: string|undefined;
    title: string|undefined;
    description: string|undefined;
}
interface ButtonProps {
    mode: string|undefined;
    text: string|undefined;
    onClick: any;
}

export type {
    CardsProps,
    ButtonProps
}