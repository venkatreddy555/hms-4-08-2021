import React, { Children } from 'react';


type Props = {
    id?: string,
    onClick: () => void
}

const HButton: React.FC<Props> = ({children, onClick}) =>  <button onClick={onClick} className="btn btn-primary btn-lg">
    {children}
</button>

export default HButton;