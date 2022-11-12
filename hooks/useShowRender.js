import { useEffect, useState } from "react";

const useShowRender = () => {
 const [showRender, setShowRender] = useState(false)
 useEffect(() => {
  setShowRender(true)
 }, [])
 return (showRender);
}

export default useShowRender;