import PlaySong from './PlaySong'

const GamePage = () => {
    return (
        <div className="app-background">
            <PlaySong src={'/music/bgm/opening.mp3'} loop={true} />
            <h1 className="game-title">east sea</h1>
            <div className="select-box-group">
                <button className="select-box">START</button>
                <button className="select-box">SAVED</button>
                <button className="select-box">EXIT</button>
            </div>
        </div>
    )
}

export default GamePage;