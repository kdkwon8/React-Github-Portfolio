import React from 'react';
import styled from 'styled-components';


const Innerlink = styled.a`
    color: #61dafb;
    `;

const Link = ({ url, title }) => (
    <Innerlink
        href={url}
        target='_blank'
        rel='noopener noreferrer'    
    >
        {title}
    </Innerlink>
);

export default Link;