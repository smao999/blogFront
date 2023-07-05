import React, { memo, useState } from 'react'

const Category = memo(() => {
  const [num, setNum] = useState(() => {
    console.log('111');
    return 2
  })
  const demo = () => {
    setNum(3)
  }
  
  return (
    <div><>{num}</><p onClick={demo}>Category</p></div>
  )
})

export default Category