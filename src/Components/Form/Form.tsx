// @ts-ignore
import React, {useRef} from 'react';
interface FormProps {
  onAdd(title: string): void
}

const Form: React.FC<FormProps> = (props: any) => {

  // const [title, setTitle] = useState<string>('');
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const ref = useRef<HTMLInputElement>(null);
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  }

    return (
        <div className='input-field mt2'>
          {/* or  value={title} onChange={handleChange} */}
            <input ref={ref} onKeyPress={keyPressHandler}  type="text" id='title' placeholder='Write' />
            <label htmlFor="title" className='active'>
                Write....
            </label>
        </div>
    )
}

export default Form;
