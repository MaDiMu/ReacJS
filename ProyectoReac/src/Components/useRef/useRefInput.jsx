import React, { useEffect, useRef } from 'react'

const UseRefinput = () => {
    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()

    },[])



  return (
    <div>
        <form action="">
            <input type="text" placeholder='Nombre' ref={inputRef} />
            <input type="password" placeholder='Contraseña' />

        </form>
    </div>
  )
}

export default UseRefinput