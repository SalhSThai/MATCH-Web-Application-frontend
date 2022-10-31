import React from 'react'

export default function Send({ className ,onClick}) {
    return (
        <div role='button' className={`${className}`} onClick={onClick}>
            <div className={`relative h-full w-full`}>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                    <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
            </div>
        </div>
    )
}
