import { useCallback, useState } from "react";
import C1 from "./bilesenler/C1";

function App() {

  const [sayac,sayacGuncelle] = useState(0)
  const deger = sayac % 5 === 0 ? sayac : "5'in kati degil"

    const uyariGoster = useCallback(
      function (uyari){
        alert(uyari+sayac)
      },[deger])

  

  

  return (
  
  <>
    merhaba... Sayac:  {sayac}
    <button onClick={()=>{sayacGuncelle(item=>item+1)}} >Arttır</button>
    <C1 f1={uyariGoster} veri={deger} />
  </>
    )
}

export default App;
