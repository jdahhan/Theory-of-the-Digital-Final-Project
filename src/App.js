import './App.css';
import Modal from './Modal.jsx'
import React, {useState, useEffect, useRef} from 'react';

const questions = [
    "What would you like to do to the politician or celebrity you hate most in the world?",
    "What would you do with the most attractive person you've ever seen?",
    "How do you feel about the person you hate most in the world?",
    "Who is someone you find incredibly repulsive and why?",
    "What is the lowest point you've ever experienced in your life?"
]

function App() {
    const videoRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const [typingPhase, setPhase] = useState(true);
    const [buttonVisible, setButtonVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [question, setQuestion] = useState("");
    const [text, setText] = useState("");
    const getQuestion = () => {setQuestion(questions[Math.floor(Math.random() * questions.length)])}
    const retryClick = () => {
        setPhase(true);
        setButtonVisible(false);
    }
    const modalClick = () => {
        setModalVisible(true);
    }
    const handleEnter = (e)=>{
        if (e.key == "Enter"){
            setPhase(!typingPhase);
            getQuestion();
        }
    }
    const handlechange = (e) =>{
        setText(e.currentTarget.textContent);
    }
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: {width: 1920, height: 1080}
        })
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        }).catch(err => {
            console.error(err)
        })
    }
    useEffect(() => {
        getQuestion();
        getVideo();
    }, [videoRef])
    useEffect(() => {
        if (typingPhase){
            setText('');
        } else{
            setTimeout(() => {setButtonVisible(true);}, 2000);
        }
    }, [typingPhase])
    return (
    <div className='App'>
        {modalVisible &&
            <div className='modalcontainer'>
                <Modal 
                    setModal={setModalVisible}
                />
            </div>
        }
        <div className='textcontainer'>
            <span className='prompt text'>{(typingPhase ? question : "Now repeat it to yourself!")}</span>
            <span
                className='text input' 
                ref={textRef} 
                role='textbox' 
                contentEditable={typingPhase}
                onBlur={(e) => handlechange(e)}
                onKeyPress={(e) => handleEnter(e)}
                autoFocus>
                {text}
            </span>
            
        </div>
        <div className={'video' + (typingPhase ? ' inactive' : "")}>
            <video ref={videoRef}></video>
        </div>
        <button 
            className={'button try' + ( buttonVisible ? ' active' : '' )}
            ref={buttonRef} 
            onClick={() => retryClick()}
        >
            TRY AGAIN
        </button>
        
        <button 
            className={'button openmodal' + ( buttonVisible ? ' active' : '' )}
            ref={buttonRef} 
            onClick={() => modalClick()}
        >
            LEARN MORE
        </button>
    </div>
    );
}

export default App;
