import React, { useEffect, useState, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import socket from '../../../config/socket';
import { thunkFetchFriends } from '../../../redux/Slice/FriendsSlice';
import FriendsCard from '../../ChatAppComponent/FriendsCard';
import userMeasure from './MessageContent';

import { useSprings, animated, config, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { clamp } from "lodash";
import swap from 'lodash-move'
import styles from './styles.module.css'
import useMeasure from 'react-use-measure';



function MessageList() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [isConected, setIsConnected] = useState(false)
    const userId = state?.auth?.userInfo?.id ?? 1;
    const allChatRooms = state?.friends?.allChatRooms


    useEffect(() => {
        dispatch(thunkFetchFriends(userId));
        socket.auth = { userId }
        socket.connect();
        // socket.on('connect', () => {
        //     setIsConnected(true);
        // });
        return () => {
            socket.disconnect();
            // setIsConnected(false);
        }
    }, []);



    const roomNameFn = (myId, userLowerId, userHigherId) => {
        const lowerCheck = myId < userHigherId
        const roomname = lowerCheck ? [myId, userHigherId].join('') : [myId, userLowerId].join('');
        return { roomname, lowerCheck }
    }

    const infomation = (myId, info) => {

        const lowerCheck = myId < info?.userHigherId
        const roomname = lowerCheck ? [myId, info?.userHigherId].join('') : [myId, info?.userLowerId].join('');
        const friendsInfo = lowerCheck ? info?.myhigherId : info?.mylowerId;
        return { roomname, lowerCheck, chatMessage: [...info?.ChatMessages,], friendsInfo, info }
    }

    const fn = (order = [], active = false, originalIndex = 0, curIndex = 0, y = 0) => (index = 0) =>
        active && index === originalIndex
            ? {
                y: curIndex * 100 + y,
                scale: 1.1,
                zIndex: 1,
                shadow: 15,
                immediate: (key) => key === 'zIndex',
                config: (key) => (key === 'y' ? config.stiff : config.default),
            }
            : {
                y: order.indexOf(index) * 100,
                scale: 1,
                zIndex: 0,
                shadow: 1,
                immediate: false,
            }
    function DraggableList({ items }) {

        const order = useRef(items?.map?.((i, index) => index)) // Store indicies as a local ref, this represents the item order

        const [springs, api] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.

        const props = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.

        const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {


            const curIndex = order.current.indexOf(originalIndex)

            const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)

            const newOrder = swap(order.current, curIndex, curRow)

            console.log(
                originalIndex + `\n`,
                active + `\n`,
                y + `\n`,
                curIndex + `\n`,
                curRow + `\n`,
                newOrder + `\n`,

            );
            api.start(fn(newOrder, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render

            if (!active) order.current = newOrder
        })

        console.log(bind(4));

        return (
            <div className={styles.content} /* style={{ height: items.length * 100 }} */>
                {springs.map(({ zIndex, shadow, y, scale }, index) => (<animated.div {...bind(index)} key={index}
                    style={{ zIndex, y, scale, }}
                    children={items[index]}
                />
                ))}
            </div>
        )
    }

    function ChainExample() {
        const styles = useSpring({
            loop: true,
            to: [
                { opacity: 1, color: '#ffaaee' },
                { opacity: 0, color: 'rgb(14,26,19)' },
            ],
            from: { opacity: 0, color: 'red' },
        })


        return <animated.div style={styles}>I will fade in and out</animated.div>
    }

    const arritems = ['Lorem', 'ipsum', 'dolor', 'sit']
    return (
        <div className='relative w-[90%] h-full'>
            {/* {allChatRooms?.map?.((i, d) => <FriendsCard key={i.id} info={infomation(userId, i)} />)} */}
            {/* <Test items={arritems}/> */}
            {/* <ChainExample /> */}
            <DraggableList items={allChatRooms?.map?.((i, d) => <FriendsCard key={i.id} info={infomation(userId, i)} />)} />
        </div>
    )
}

export default MessageList
