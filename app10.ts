// 03.05
class Charactor {
  q: string
  w: string
  e: string
  r: string
  constructor(q, w, e, r) {
    this.q = q
    this.w = w
    this.e = e
    this.r = r
  }
  showString: (q?: string, w?: string, e?: string, r?: string) => void =
  function(q, w, e, r) {
    console.log(`이 캐릭터의 스킬은   ${q || this.q}   ${w || this.w}   ${e || this.e}   ${r || this.r}`)
  }  
  

}

const nunu = new Charactor("consume", "snowball", "몰라", "몰라2")
nunu.showString()
