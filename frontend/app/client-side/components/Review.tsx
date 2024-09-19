import React from 'react'
import Card from '../tools/Card'
import { StarIcon } from '@chakra-ui/icons'

const Review = () => {
  return (
    <section className="bg-secondary">
      <header className="text-center text-3xl py-5">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </header>
      <section className="text-center text-xl">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, voluptatum? Earum quidem sapiente beatae in reprehenderit eius quaerat ea, odio at nisi rem saepe dolorum excepturi a consequatur libero reiciendis!</p>
      </section>
      <section className="grid grid-cols-3">
        {[1,2,3].map((item, index) => (
          <div key={index} >
            <Card>
                <div className="flex py-5">

              {[1,2,3].map(()=><StarIcon />)}
                </div>
              <h3 className='py-5'>Card Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quid em sapiente beatae in reprehenderit eius quaerat ea, odio at nisi rem saepe dolorum excepturi a consequatur libero reiciendis!</p>
            </Card>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Review
