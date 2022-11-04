import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import AlertMatchBody from './component/AlertMatchBody';
import AlertMatchFooter from './component/AlertMatchFooter';
import { useSpring, animated } from '@react-spring/web'
import { interpolate } from 'flubber';
import socket from '../../config/socket';
import MatchBox from './MatchBox';
import styled from 'styled-components';


function AlertMatchContainer() {
  const [showUp, setShowUp] = useState(false)
  const [style, api] = useSpring(() => ({ scale: 0, rotate: 0 }))
  const [info, setInfo] = useState({})
  const [match, setMatch] = useState(false)
  const Stamp = styled.div`
  transform: rotate(12deg);
	font-size: 3rem;
	font-weight: 700;
	border: 0.25rem solid #555;
	padding: 0.25rem 1rem;
	text-transform: uppercase;
	border-radius: 1rem;
	font-family: 'Courier';
	mask-image: url('../../png/grunge2.png');
  mask-size: 944px 604px;
  mix-blend-mode: multiply;
	border: 0.5rem solid #0A9928;
	mask-position: 13rem 6rem;
	transform: rotate(-14deg);
`
  useEffect(() => {
    socket.on('matchRealTime', input => {
      console.log(input);
      setInfo(input);
      setShowUp(true);
      api.start({
        to: async animate => {
          await animate({ from: { scale: 0, rotate: -45 }, to: { scale: 1, rotate: 0 }, config: { duration: 1000 } });
          setMatch(true)
        }
      })
    })

    return ()=> socket.off('matchRealTime')
  }, [])

  return (
    <animated.div role='button' className={`absolute w-full h-full top-0 left-0 flex justify-center items-center overflow-hidden   ${showUp ? ` block ` : ` hidden `}`} style={{ ...style, }} onClick={e => {
      setMatch(false)
      setShowUp(false)
    }}>
      <MatchBox info={info} />
      <Stamp className={`text-[#0A9928] absolute z-[30] select-none ${match ? ' inline-block ' : ' hidden '}`}>MATCH</Stamp>


    </animated.div>
  )
}
















/* 

function AlertMatchContainer() {
  const showUp = useSelector(state => state.friends.showUpModalMatch)

  const [activeIndex, setActiveIndex] = useState(0);
  const [interpolators, setInterpolators] = useState({
    path: () => paths[activeIndex]
  })
  const paths = [
    "M5.01 41C2.38054 45.5608 0.99757 50.7333 1 55.9979C1.00244 61.2624 2.39019 66.4336 5.02386 70.992C7.65753 75.5504 11.4444 79.3355 16.004 81.9671C20.5636 84.5986 25.7355 85.984 31 85.984C36.2645 85.984 41.4364 84.5986 45.996 81.9671C50.5556 79.3355 54.3425 75.5504 56.9761 70.992C59.6098 66.4336 60.9976 61.2624 61 55.9979C61.0024 50.7333 59.6195 45.5608 56.99 41L31.005 1L5.005 41H5.01Z",
    "M31 41C41 26.2 31 6 26 1C26 16.19 17.135 24.705 11 31C4.87 37.3 1 47.2 1 56C1 63.9565 4.16071 71.5871 9.7868 77.2132C15.4129 82.8393 23.0435 86 31 86C38.9565 86 46.5871 82.8393 52.2132 77.2132C57.8393 71.5871 61 63.9565 61 56C61 48.34 55.72 36.3 51 31C42.07 46 37.045 46 31 41Z",
    "M34.7942 2.02833L34.7942 2.02835L34.7902 2.02296C34.3159 1.38262 33.5522 1 32.7549 1C31.3648 1 30.2188 2.14603 30.2188 3.53613V7.22168C30.2188 9.66943 29.2106 12.0237 27.4339 13.7074C27.4336 13.7077 27.4332 13.708 27.4329 13.7084L13.3742 27.1197C5.47054 34.6671 1 45.1302 1 56.0635C1 71.4985 13.5015 84 28.9365 84H31.875C48.9204 84 62.75 70.1704 62.75 53.125V52.4941C62.75 44.658 59.6348 37.1427 54.0947 31.6026L53.5136 31.0216C53.0051 30.513 52.297 30.2188 51.5645 30.2188C50.0415 30.2188 48.8125 31.4478 48.8125 32.9707V47.8125C48.8125 54.2251 43.6001 59.4375 37.1875 59.4375C30.7749 59.4375 25.5625 54.2251 25.5625 47.8125V47.165C25.5625 43.9106 26.8639 40.7844 29.1591 38.4892L35.5673 32.081C39.3633 28.2849 41.5 23.1109 41.5 17.7305C41.5 13.3471 40.0754 9.05914 37.4504 5.56445L34.7942 2.02833Z",
    "M10.2406 51.1341L45.3201 83.884C46.776 85.2429 48.6979 86 50.6975 86C52.697 86 54.6189 85.2429 56.0749 83.884L91.1543 51.1341C97.0559 45.6402 100.395 37.9332 100.395 29.8768V28.7508C100.395 15.1811 90.5914 3.61089 77.2158 1.37838C68.3634 -0.0970128 59.3557 2.79554 53.0271 9.1242L50.6975 11.4538L48.3679 9.1242C42.0392 2.79554 33.0316 -0.0970128 24.1792 1.37838C10.8036 3.61089 1 15.1811 1 28.7508V29.8768C1 37.9332 4.33905 45.6402 10.2406 51.1341Z",
  ]
  const color = ["#206CFF", "#FF8227", "#FF3535", "#FF84EB"]
  const animationProps = useSpring(
    {
      from: { x: 0 },
      to: {
        x: 1,
        path: paths[activeIndex], // this stays the same as it doesn't need a custom interpolator
      },
      config: {
        clamp: true, // interpolation function can't go above 1
      },
      reset: true,
    });
  const handleClick = (e) => {
    e.preventDefault();


  }
  const next = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setActiveIndex((prevIndex) => {
          if (prevIndex < 3) {
            setInterpolators({ path: interpolate(paths[prevIndex], paths[prevIndex + 1], { maxSegmentLength: 0.5 }) });
            return prevIndex + 1
          }

          else {
            setInterpolators({ path: interpolate(paths[prevIndex], paths[0], { maxSegmentLength: 0.5 }) });
            return 0
          }
        }

        )
        resolve();
      }, 1000);
      reject({ err: 'dont know' })
    })
  }
  const call = async () => {

    await next();
    call();
  }
  useEffect(() => {
    call();
  }, [])
  
  return (
    <animated.div className={`absolute w-full h-full top-0 left-0 bg-white  ${false ? ` block ` : ` hidden `}`} style={{ ...style, }}>

      <button onClick={handleClick}>click</button>
      <div className="flex gap-5 ">
        {["disappointed", "neutral", "excited", 'heart'].map((text, index) => (
          <button
            type="button"
            key={index}
            onClick={() => {
              setActiveIndex((prevIndex) => {
                setInterpolators({ path: interpolate(paths[prevIndex], paths[index], { maxSegmentLength: 0.5 }) });
                return index;
              })
            }}
            style={{
              background: activeIndex === index ? "purple" : "white",
              color: activeIndex === index ? "white" : "black"
            }}
          >
            {text}
          </button>
        ))}
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <animated.path d={animationProps.x.to(interpolators.path)} fill="#D67129" stroke="#FF8227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </animated.div>
  );
} */

export default AlertMatchContainer;
