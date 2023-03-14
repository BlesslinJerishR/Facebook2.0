import Image from "next/image"

function InputBox() {
  return (
    <div>
       <div>
        <Image 
            className="rounded-full"
            src={'https://links.papareact.com/kxk'}
            width={40}
            height={40}
            layout="fixed"
        />
       </div>       
    </div>
  )
}

export default InputBox
