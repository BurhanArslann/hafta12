import { memo } from "react"

function C1({veri,f1}){
    console.log("c1 komponenti render oldu")
    return(
        <>
            <div>
                Gelen veri:{veri}
                <hr/>
                <button onClick={()=>{f1("c1'deng elen uyarı")}}>uyarı göster</button>
            </div>
        </>
    )
}

export default memo(C1)