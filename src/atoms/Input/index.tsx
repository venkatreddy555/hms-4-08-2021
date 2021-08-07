import React from 'react';

type InputType = 'password' | 'email' | 'text';

type IProps = {
    type?: InputType,
    label?: string,
    placeholder?: string,
    id: string,
    onChange: (value: string ) => void
}



const HInput = ({
    type = 'text',
    label = '',
    placeholder = '',
    id='',
    onChange = (value: string = '') => {}
}:IProps) => {
    return <>
        <div className="position-relative form-group">
            <label htmlFor={id} className="">{label}</label>
            <input onChange={event => onChange((event.currentTarget.value as string))} id={id} placeholder={placeholder} type={type} className="form-control" />
        </div>
    </>
}

export default HInput;