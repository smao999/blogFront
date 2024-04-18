import {FC, useState} from 'react';

import '../../../public/tinymce/js/tinymce/skins/content/default/content.min.css'
import ReactHtmlParser from 'react-html-parser';
import axios from "axios";
import {Button} from "antd";

interface IAbout {}

const About: FC<IAbout> = () => {
  const [content, setContent] = useState('');

  const getContent = async () => {
    const res:any = await axios.get('/api/blog?id=' + '7ee19253-4977-405f-9c0f-371cc242d417');
    console.log(res)
    setContent(res.data.content)
  }


  return (
    <div>
      <Button onClick={getContent}>获取文章</Button>
      <div className="mce-content-body">{ReactHtmlParser(content)}</div>
    </div>
  )
}

export default About