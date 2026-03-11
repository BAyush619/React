import { useEffect, useState } from "react";

//key means in localstorage we store key and value so key is that key (theme)
function useLocalStorage(key, defValue) {
  const [value, setValue] = useState(() => {
    let currValue;

    try {
      currValue = JSON.parse(localStorage.getItem(key) || String(defValue))
    } catch (error) {
      console.log(error);
      currValue = defValue;
    }
    return currValue;
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key])
  return [value, setValue];
}
export default useLocalStorage;