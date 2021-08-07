import React from 'react';

type IProps = {
    label?: string,
    id: string,
    onChange:  (value: boolean ) => void
}


const HCheckbox = ({
    label = '',
    id = '',
    onChange = (value) => { }
}: IProps) => {
    return <>
        <div className="position-relative form-check">
            <input type="checkbox" onChange={(event) => onChange(event.currentTarget.checked)}  id={id} className="form-check-input" />
            <label htmlFor={id} className="">{label}</label>
        </div>
    </>
}

export default HCheckbox;