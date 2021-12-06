import { useState } from "react"


const UseSt = () => {
  const [result, setResult] = useState(0)

  const handleSub = () => {
    setResult(prevCount => prevCount - 1)   
  }

  const handleSum = () => {
    setResult(prevCount => prevCount + 1)
  }

  return (
    <>
      <button
        onClick={handleSub}
      >-</button>
      <span>{result}</span>
      <button
        onClick={handleSum}
      >+</button>
    </>
  );
}

export default UseSt;
