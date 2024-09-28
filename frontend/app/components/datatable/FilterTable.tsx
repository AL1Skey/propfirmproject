"use client";
import React from 'react'
const filterTemplate = [
  {
    category: 'Category',
    items: ['Category 1', 'Category 2', 'Category 3']
  },
  {
    category: 'Sub Category',
    items: ['Sub Category 1', 'Sub Category 2', 'Sub Category 3']
  },
  {
    category: 'Status',
    items: ['Active', 'Inactive']
  },
  {
    category: 'Date',
    items: ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days']
  }
]
const FilterTable = () => {

  return (
    <div className='p-5'>
      <header>
        <h4>Filter</h4>
      </header>
      <section className='w-full grid grid-flow-col'>
        {filterTemplate.map((item,index)=>(
            <div key={index} className='category__section px-5'>
            <div className="category__header flex gap-10">
                <h3>{item.category}</h3>
                <div className="category__header__all">
                    <label htmlFor="category_1">All </label>
                    <input type="checkbox" name="category_1" id="" />
                </div>
            </div>
            <div className="category__body px-5 leading-9">
                {item.items.map((subItem,index)=>(
                <div className="category__body__item" key={index}>
                    <label htmlFor="category_2">{subItem}</label>
                    <input type="checkbox" name="category_2" id={subItem} />
                </div>))
                }
               
            </div>
        </div>
        ))}
      </section>
    </div>
  )
}

export default FilterTable
