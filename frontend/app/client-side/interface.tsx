
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

interface FooterNavProps {
    title: string|undefined;
    data: Array<FooterNavPropsData>|undefined;
}
interface FooterNavPropsData {
    title: string|undefined;
    link: string|undefined;
}

export type {
    CardsProps,
    ButtonProps,
    FooterNavProps,
    FooterNavPropsData
}