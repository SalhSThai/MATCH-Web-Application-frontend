import { padStart } from 'lodash';
import React from 'react'
import styled from 'styled-components';

export default function MatchSlideCard() {

    const MatchCard = styled.div`
    background-image: url('https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; 
    `;

    return (
        <div className='relative h-full w-[120px] flex flex-col'>
            <MatchCard className='relative h-[150px] w-full bg-white rounded-2xl overflow-hidden' />
            <h1 className='absolute bottom-[0] left-[50%] -translate-x-[50%] text-2xl font-medium'>username</h1>
        </div>
    )
}
