import React from 'react';
import './importAllIcons';
import './icon.scss'
interface IconProps {
    name:string
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="reactComponent-icon">
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    )
}

export default Icon