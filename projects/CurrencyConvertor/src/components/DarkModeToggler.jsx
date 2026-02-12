import { useState } from "react";

function DarkModeToggler() {
  const [mode, setMode] = useState()
  return (
    <>
      <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Change Mode</label>

    </>
  )
}
export default DarkModeToggler; 