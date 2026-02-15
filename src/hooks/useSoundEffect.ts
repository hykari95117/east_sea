import { useRef, useCallback } from 'react'

const useSoundEffect = (src: string) => {
    const audioRef = useRef<HTMLAudioElement>(new Audio(src))

    const play = useCallback(() => {
        audioRef.current.currentTime = 0
        audioRef.current.play()
    }, [])

    return play
}

export default useSoundEffect
