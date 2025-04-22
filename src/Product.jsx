import React from 'react'

function Product({naam ,data}) {
  return (
    <>
    <h2>{naam} </h2>
    <h2>{data.name} </h2>
    <h2>{data.age} </h2>
    </>
  )
}

export default Product