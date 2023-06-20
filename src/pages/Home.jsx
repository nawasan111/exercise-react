import React from "react";
import { useState } from "react";
import isPrime from "../lib/isPrime";

export default function Home() {
  const [count, setCount] = useState(0);
 return (
    <main className="main-center">
      <div className="font-lg">{count}</div>
      <div>
        <button className="m-3" onClick={() => setCount(count + 1)}>เพิ่ม</button>
        <button className="m-3" onClick={() => {
            if(count === 0) return;
            setCount(count - 1)
        }}>ลด</button>
     </div>
        <div className="m-3">
            <div className="font-sm">{count} {isPrime(count) ? "" : "ไม่"}เป็นจำนวนเฉพาะ</div>
        </div>
 
    </main>
  );
}
