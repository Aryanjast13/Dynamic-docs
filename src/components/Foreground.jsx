
import {useRef} from 'react'
import Card from './Card';

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "this the background color",
      filesize: ".9mb",
      tag: {  tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "this the background color",
      filesize: ".9mb",
      tag: {  tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "this the background color",
      filesize: ".9mb",
      tag: {  tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return <div ref={ref} className="fixed z-[3] w-full h-full flex gap-4 flex-wrap p-4">
    {data.map((item, index) => (<Card data={item} key={ index} refrence={ref} />))}
    
  </div>;
}

export default Foreground