import {useState, useEffect, useRef} from "react";


export function useTypingEffect(textToType, duration) {
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);
    useEffect ( () => {
        const intervalID = setInterval(() => {
            setCurrentPosition((value) => value +1)
            currentPositionRef.current += 1;
            if(currentPositionRef.current > textToType.length) {
                clearInterval(intervalID);
            }
        }, duration);
        return () => {
            clearInterval(intervalID);
            currentPositionRef.current = 0;
            setCurrentPosition(0);
        }
    }, [duration, textToType.length]);
    return textToType.substring(0,currentPosition)
}