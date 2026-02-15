import PlaySong from './PlaySong'

const GamePage = () => {
    return (
        <div>
            {/* 5초에 걸쳐 음악이 서서히 커진다. 5초가 지나면 볼륨 100%로 재생 */}
            <PlaySong src={'/music/bgm/in_office.mp3'} loop={true} fadeIn={5000}/>
            게임씬
        </div>
    )
}

export default GamePage;