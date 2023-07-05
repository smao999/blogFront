import React, { memo, useState } from 'react'
import { Button } from 'antd'
const File = memo(() => {
  const [files, setFiles] = useState<any>()

  const getFiles = (e: any) => {
    let size = 4 * 1024 * 1024
    let file = e.target.files[0]
    let chunkList = []
    let cur = 0
    while (cur < file.size) {
      chunkList.push({
        file: file.slice(cur, cur + size)
      })
      cur += size
    }
  }

  return (
    <div>
      <input type='file' onChange={e => getFiles(e)}></input>
      <Button type='primary'>上传</Button>
      <div className={'w-500 h-500 bg-blue-400 border-r-20 border-e-2 border-green-600'}>123</div>
      <div className={'w-[500px] h-[300px] bg-slate-500 ml-[30px] rounded-[15px]'}></div>
    </div>
  )
})

export default File