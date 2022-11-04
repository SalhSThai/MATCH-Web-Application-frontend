import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import socket from '../../config/socket';
import { thunkFetchFriends } from '../../redux/Slice/FriendsSlice';
import MatchChatRoom from './components/MatchChatRoom';
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import useMeasure from 'react-use-measure';
import Send from '../../asset/IconChatRoom/Send';
import ChatModal from './components/ChatModal';
import lodash from 'lodash'


export default function ChatApplication() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [ref, bounds] = useMeasure()
    const [isOpenChat, setIsOpenChat] = useState(false);
    const [isopenProfilePicture, setIsOpenProfilePicture] = useState(false)
    const [userOnline, setUserOnline] = useState([])

    const myId = state?.auth?.userInfo?.id ?? 1;
    const allChatRooms = state?.friends?.allChatRooms ?? [];
    const onlineUserId = state?.auth?.onlineFriendsArr ?? [];
    useEffect(() => {
        dispatch(thunkFetchFriends(myId)); 
    }, []);
    useEffect(()=>{
        setUserOnline(onlineUserId)
    },[onlineUserId])

const arr = [1,2,3,4,5,6,7,8];
console.log(lodash.clamp(2,-13,15));

    const [{ y }, api] = useSpring(() => ({ y: 0 }))
    const bind = useDrag(({ offset: [ox, oy] }) => { api.start({ y: oy }) }, { bounds: { top: -(bounds.bottom - bounds.height), bottom: 0 }, rubberband: true })


    // function SlideChatCard(props) {
    //     const [{ y }, api] = useSpring(() => ({ y: 0 }))
    //     const bind = useDrag(({ active, offset: [ox, oy], movement: [mx, my], velocity: [vx, vy] }) => { api.start({ y: active ? my : 0 }); }, { bounds: { top: 0 }, rubberband: true })
    //     return <animated.div ref={ref} className="relative w-full h-full items" {...bind()} style={{ y }} >{props.children}</animated.div>
    // }

    const modalPopup = (rawInfo) => {
        setChatRoom(p => rawInfo)
        setIsOpenChat(p => true);
    }
    const [chatRoom, setChatRoom] = useState({})

    return (
        <div className={`relative w-full grow  overflow-y-scroll scrollbar-hide select-none`}>
            {isOpenChat ? <ChatModal status={isOpenChat} setStatus={setIsOpenChat} friendsInfo={chatRoom} /> : null}
            <animated.div ref={ref} className=" w-full h-full items " {...bind()} style={{ y }} >
                {allChatRooms?.map?.((i, d) =>
                    <MatchChatRoom key={d} friendsInfo={i} friendId={myId === i?.userLowerId ? i?.userHigherId : i?.userLowerId} openChat={modalPopup} userOnline={userOnline} openProfilePicture={e => setIsOpenProfilePicture(true)} />)}
            </animated.div>

        </div>)
}




/* 
export default function ChatApplication() {
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

    const infomation = (myId, info) => {

        const lowerCheck = myId < info?.userHigherId
        const roomname = lowerCheck ? [myId, info?.userHigherId].join('') : [myId, info?.userLowerId].join('');
        const friendsInfo = lowerCheck ? info?.myhigherId : info?.mylowerId;
        return { roomname, lowerCheck, chatMessage: [...info?.ChatMessages,], friendsInfo, info }
    }
    const fn =
    (order = [], active = false, originalIndex = 0, curIndex = 0, y = 0) =>
        (index = 0) =>
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
            <div  className={styles.content} style={{ height: items.length * 100 }} >
                {springs.map(({ zIndex, shadow, y, scale }, index) => (<animated.div {...bind(index)} key={index}
                    style={{ zIndex, y, scale, }}
                    children={items[index]}
                />
                ))}
            </div>
        )
    }

    return (
        <div className='relative w-full grow p-3 bg-green-100'>
            <DraggableList items={allChatRooms?.map?.((i, d) => <FriendsCard key={i.id} info={infomation(userId, i)} />)} />

        </div>
    )
}
 */