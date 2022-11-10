import React, { useState } from 'react'


const CollectionCard = ({image}) => {
  const [readMore, setReadMore] = useState(false)
  return (
<div className='py-10'>
      <div className=" max-w-sm rounded overflow-hidden shadow-2xl hover:scale-105 duration-300 h-[700px] cursor-pointer">
        <img src={image.image} alt="" className=" float-left w-full h-[450px]" />
        <div className="px-6 py-10">
          <div className="font-bold text-black-500 text-xl mb-2 underline-offset-auto">
            Title: {image.name}
          </div>
          <ul>
            <li>
              <strong>description:</strong>
              <p>{readMore ? image.description : `${image.description.substring(0,50)}...`} </p>
              <button onClick={() => setReadMore(!readMore)}>{readMore?"show less":"read more"}</button>
            </li>
            <li>
              <strong>Color: </strong>
              {image.color}
            </li>
            <li>
              <strong>Condition: </strong>
              {image.condition}
            </li>
            <li className="px=6 py-4 text-3xl">
              <strong>Price: </strong>
              {"$" + image.price}
            </li>
          </ul>
        </div>
        {/* <div className="px=6 py-4 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
      </div> */}
      </div>
      <button></button>
    </div>
  ); 
}

export default CollectionCard
