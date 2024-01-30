"use client";
import React, { useState, createContext, useContext } from 'react';

export const ActiveSectionContext = createContext(null);

export const ActiveSectionContextProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                activeSection,
                setTimeOfLastClick,
                timeOfLastClick
            }}
        >
            {children} 
        </ActiveSectionContext.Provider>
    );
};

export function useActiveSectionContext(){
    
    const context = useContext(ActiveSectionContext);

    if(context === null){
        throw new Error(
            "useActiveSectionContext must be use within a ActiveSectionContextProvider"
        )
    }
    return context
}