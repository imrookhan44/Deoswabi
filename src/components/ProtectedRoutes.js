import React, { useState, useEffect} from 'react';

function ProtectedRoutes() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
   console.warn("useEffect called")
  }, [])
  return(
     <div>
      



     </div>
  )
}

export default ProtectedRoutes;
