import { useState } from 'react'
import './App.css'

function App() {
  const [dialogueIndex, setDialogueIndex] = useState(0)
  const [showChoices, setShowChoices] = useState(false)

  const dialogues = [
    {
      character: '소영',
      text: '있지~ 쌤은 페북이나 인스타 같은 거 안 해??',
      image: '/image/image2.png'
    },
    {
      character: '미희',
      text: '청춘이란, 인생의 어떤 한 시기가 아니라 마음가짐을 뜻하나니,\n사무엘 울만의 <청춘>이라는 시에요.',
      image: '/image/image1.png'
    },
  ]

  const choices = [
    { text: '자주 하는 편이다.' },
    { text: '가끔 하는 편이다.' },
  ]

  const currentDialogue = dialogues[dialogueIndex]

  const handleDialogueClick = () => {
    if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex(dialogueIndex + 1)
    } else {
      setShowChoices(true)
    }
  }

  const handleChoice = (index: number) => {
    console.log('선택:', choices[index].text)
    setShowChoices(false)
    setDialogueIndex(0)
  }

  return (
    <div className="game-container">
      {/* 배경 */}
      <div className="background" />

      {/* 캐릭터 */}
      <div className="character-container">
        <img
          src={currentDialogue.image}
          alt={currentDialogue.character}
          className="character-image"
        />
      </div>

      {/* 선택지 */}
      {showChoices && (
        <div className="choices-container">
          {choices.map((choice, index) => (
            <button
              key={index}
              className="choice-button"
              onClick={() => handleChoice(index)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}

      {/* UI 컨트롤 버튼 */}
      <div className="control-buttons">
        <button className="control-btn" title="자동재생">⟳</button>
        <button className="control-btn" title="스킵">▶▶</button>
        <button className="control-btn" title="로그">☰</button>
        <button className="control-btn" title="설정">⋯</button>
      </div>

      {/* 대화창 */}
      <div className="dialogue-box" onClick={handleDialogueClick}>
        <div className="character-name">
          <span className="name-icon">❀</span>
          <span>{currentDialogue.character}</span>
        </div>
        <div className="dialogue-text">
          {currentDialogue.text.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
