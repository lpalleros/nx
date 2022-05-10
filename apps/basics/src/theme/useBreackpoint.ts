import React, { useState, useEffect } from 'react';

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState('lg');
    const resize = () => {
        // setBreakpoint(window.innerWidth)
        if(window.innerWidth < 320) {
            setBreakpoint('xs') 
        } else if(window.innerWidth >= 320 && window.innerWidth < 720 ) {
            setBreakpoint('sm')
        } else if(window.innerWidth >= 720 && window.innerWidth < 1024) {
            setBreakpoint('md')
        } else if(window.innerWidth >= 1024) {
            setBreakpoint('lg')
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return breakpoint;
};
