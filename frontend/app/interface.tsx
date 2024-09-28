
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

interface DatatablePropsData{
    firm: string|undefined;
    name: string|undefined;
    price: any|undefined;
    acc_size: any|undefined;
    prof_split: any|undefined;
    prof_target: any|undefined;
    max_loss: any|undefined;
    max_drawdown: any|undefined;
    reset_type: string|undefined;
    type_comm: any|undefined;
    prof_target_drawdown: any|undefined;
    payout_freq: any|undefined;
    trust_rating: any|undefined;
    date_established: any|undefined;
    loyalty_point: any|undefined;
}
interface DatatableProps {
    column: Array<any> | undefined;
    data: Array<{ [key: string]: any }> | undefined;
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
    FooterNavPropsData,
    DatatableProps
}