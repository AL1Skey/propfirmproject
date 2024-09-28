import React from 'react'
import { FooterNavProps } from '../interface'

const FooterNav: React.FC<Partial<FooterNavProps>> = ({ title, data }) => {
    return (
        <div>
            <div className="footer__nav__title">

                <h4 className='text-3xl font-bold'>{title}</h4>
            </div>
            <div className="footer__nav__content px-4">
                <ul>
                    {data?.map((item, index)=>(
                        <li key={index} className='py-2'>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FooterNav
