// @ts-ignore
import React, { useRef } from 'react';

export const Form: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      console.log(ref.current!.value) // (!) okay this is not error TS work ref->Input
      ref.current!.value = '';
    }
  }

    return (
        <div className='input-field mt2'>
            <input onKeyPress={keyPressHandler} ref={ref} type="text" id='title' placeholder='Write' />
            <label htmlFor="title" className='active'>
                Write....
            </label>
        </div>
    )
}
