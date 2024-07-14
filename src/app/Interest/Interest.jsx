import Box from "../../components/Box"
import Image from "next/image"
import { IoArrowForward } from "react-icons/io5"


const Interest = () => {
    const Array = [{
        text:'Languages',
        bg:'bg-blue-50',
        circleColor:'bg-[#1EBCB4]'
    },{text:'Political Science',bg:'bg-white',circleColor:'bg-[#FFB201]'}
    ,{text:'Mathematics',bg:'bg-white',circleColor:'bg-[#FFB201]'},
    {text:'Teaching',bg:'bg-blue-50',circleColor:'bg-[#1EBCB4]'}]
  return (
    <section className="mt-20">
       <div className="flex gap-5 max-[900px]:flex-col justify-center">
        <div className="flex flex-col w-[80%] text-start justify-between">
            <span className="text-5xl font-semibold text-start">Choose an area of <br /> interest</span>
           <div className="ml-[65%] max-[900px]:ml-0">
           <Box 
            Text={'Engineering'}
            circleColor={'bg-purple-500'}
            bg={'bg-blue-50'}
            />
           </div>
        </div>
        <div className="flex flex-wrap">
        {
            Array.map((item,index)=>(
                <Box 
                Text={item.text}
                bg={item.bg}
                circleColor={item.circleColor}
                />
            ))
        }
        </div>
       </div>
       <div className="flex-1 justify-end flex">
       <Image src={'./corner pattern.svg'} width={281} height={227} />
       </div>
    </section>
  )
}

export default Interest