import roller1 from "../../assets/icons/roller1.svg"
import roller2 from "../../assets/icons/roller2.svg"
import roller3 from "../../assets/icons/roller3.svg"
import roller4 from "../../assets/icons/roller4.svg"
import roller5 from "../../assets/icons/roller5.svg"




const Animation = () => {
  return (
    <div className="w-full h-[149px] overflow-hidden flex flex-col gap-[25px] ">
    <div className="w-auto h-[62px] flex gap-[16px]  ">
      <span className="w-[67px] h-[62px] px-[15px] py-[14px] bg-semiBlack rounded-lg border-[1px] border-white border-solid"><img src={roller1}/></span>
      <span className="w-[67px] h-[62px] px-[15px] py-[14px] bg-semiBlack rounded-lg border-[1px] border-white border-solid"><img src={roller2}/></span>
      <span className="w-[67px] h-[62px] px-[15px] py-[14px] bg-semiBlack rounded-lg border-[1px] border-white border-solid"><img src={roller3}/></span>
      <span className="w-[67px] h-[62px] px-[15px] py-[14px] bg-semiBlack rounded-lg border-[1px] border-white border-solid"><img src={roller4}/></span>
      <span className="w-[67px] h-[62px] px-[15px] py-[14px] bg-semiBlack rounded-lg border-[1px] border-white border-solid"><img src={roller5}/></span>

    </div>
    <div className="w-auto h-[62px] flex gap-[16px]  border-solid border-[1px] border-white"></div>

  </div>
  )
}

export default Animation