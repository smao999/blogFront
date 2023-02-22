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
    </div>
  )
})

export default File