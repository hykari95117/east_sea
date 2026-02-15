const useSoundEffect = (src: string) => {
    const hoverSound = new Audio(src);
    hoverSound.currentTime = 0;
    hoverSound.play();
}

export default useSoundEffect;