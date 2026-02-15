import { useEffect, useRef } from "react";

type AudioProps = {
    src: string;
    loop?: boolean;
}

const PlaySong = ({src, loop = false}: AudioProps) => {
    // audio Element
    const audioRef = useRef<HTMLAudioElement>(null);
    // source Element
    const sourceRef = useRef<HTMLSourceElement>(null);

    // paly Audio
    const playAudio = () => {
        const audio = audioRef.current;
        if(!audio) return;
        // audio play
        // 0. 오디오 재생
        audio.play().catch(error => {
            console.log(error);
            const handler = () => {
                // 2. 그래도 오류 발생하면 error 로그 출력하고 끝
                audio.play().catch(error => console.log(error));
                document.removeEventListener('click', handler);
            }
            // 1. 0번에서 audio.play() 실행 시 error가 났을 때 다시 한 번 audio.play() 시도
            document.addEventListener('click', handler);
        });
    }

    // 컴포넌트 최초 마운트 or src 변경 시
    useEffect(() => {
        const audio = audioRef.current;
        const source = sourceRef.current;
        if(!audio || !source) return;
        // src 변경 시 기존 오디오 종료
        if(!audio.paused || audio.duration > 0) {
            audio.pause();
            audio.currentTime = 0;
        }
        // 새로운 src로 오디오 재생
        source.src = src || '';
        audio.load();
        playAudio();

        const stopAudio = () => {
            audio.pause();
            audio.currentTime = 0;
        }

        document.addEventListener('click', stopAudio);

        return () => {
            document.removeEventListener('click', stopAudio);
        }
    }, [src]);


    return (
        <audio ref={audioRef} loop={loop} autoPlay={true} preload={'auto'}>
            <source ref={sourceRef} src={src} type={'audio/mpeg'}/>
            Your browser does not support the audio element.
        </audio>
    )
}

export default PlaySong;