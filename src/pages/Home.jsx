import React from "react";
import { useState } from "react";
import isPrime from "../lib/isPrime";

export default function Home() {
  const [count, setCount] = useState(0);
  const [base2, setBase2] = useState(false)

  const getIncrease = () => setCount(count + 1)

  const getReduce = () => {
    if(count === 0) return;
    setCount(count - 1)
  }

 return (
    <main className="main-center">
      <div className="font-lg">{base2 ? count.toString(2) : count}</div>
      <div>
        <button className="m-3 btn btn-primary" onClick={getIncrease}>เพิ่ม</button>
        <button className="m-3 btn btn-secondary" onClick={getReduce}>ลด</button>
     </div>
        <div className="m-3">
            <div className="font-sm">{count} {isPrime(count) && <b className="text-danger">ไม่</b>}เป็นจำนวนเฉพาะ</div>
        </div>
 
 <div>
  <input className="form-check-input cursor-pointer" type="checkbox" onChange={(e) => setBase2(e.target.checked)} checked={base2} />
  {" ฐาน 2"} 
 </div>
    </main>
  );
}
