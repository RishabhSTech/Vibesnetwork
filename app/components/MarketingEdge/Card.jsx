import Image from "next/image"
function Card(props) {
  return (
    <div className="w-[310.43px] m-auto py-[30px] pl-[30px] h-[262.01px] bg-[#46009e] rounded-[20px] flex flex-col justify-evenly">
        <Image
        src={props.icon} className="mb-2" width={40} height={50} alt="lgoo"/>
        <p className="  text-white text-2xl font-semibold leading-[30.10px] whitespace-pre-line">{props.title}</p>
        <p className="  text-white text-base font-normal font-['Inter'] leading-snug whitespace-pre-line">{props.description}</p>
    </div>
  )
}

export default Card
