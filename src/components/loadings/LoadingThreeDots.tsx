import React from 'react';
import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
    from { opacity: 1; }
    to   { opacity: 0; }
}`;

const LoadingSpanWrapper = styled.span`
    text-align: center;

    span:not(:last-child) {
        margin-right: 5px;
    }

    span {
        -webkit-animation-name: ${fadeOut};
        -webkit-animation-duration: 1s;
        -webkit-animation-iteration-count: infinite;
        
        -moz-animation-name: ${fadeOut};
        -moz-animation-duration: 1s;
        -moz-animation-iteration-count: infinite;

        animation-name: ${fadeOut};
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    span:nth-child(2) {
        -webkit-animation-delay: 100ms;
        -moz-animation-delay: 100ms;
        animation-delay: 100ms;
    }

    span:nth-child(3) {
        -webkit-animation-delay: 300ms;
        -moz-animation-delay: 300ms;
        animation-delay: 300ms;
    }
`;

export function LoadingSpan() {
    return <><LoadingSpanWrapper>
        <span>&bull;</span><span>&bull;</span><span>&bull;</span>
    </LoadingSpanWrapper></>
};