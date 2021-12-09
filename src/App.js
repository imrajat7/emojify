import "./App.css";
import { useState } from "react";

const emojiDictionary = {
    "😀": "Grinning Face",
    "🤣": "Laughing",
    "😂": "Tears of Joy",
    "😊": "Smiling",
    "😔": "sad",
    "❤️": "love",
    "🎄": "Christmas Tree",
    "✨": "Sparkles",
    "🎁": "Wrapped Gift",
    "🔥": "Fire",
    "🎾": "Tennis",
};

const emojis = Object.keys(emojiDictionary);

function App() {
    const [emoji, setEmoji] = useState("");
    const [meaning, setMeaning] = useState("translation will appear here..");

    function inputHandlerFunction(event) {
        const inputEmoji = event.target.value;
        setEmoji(inputEmoji);

        if (emojiDictionary[inputEmoji]) {
            setMeaning(emojiDictionary[inputEmoji]);
        } else {
            setMeaning("failure to recognise this emoji");
        }
    }

    function onEmojiClickHandler(emoji) {
        setEmoji(emoji);
        setMeaning(emojiDictionary[emoji]);
    }

    return (
        <div className="App">
            <h1>Emojify</h1>
            <input
                onChange={inputHandlerFunction}
                placeholder={"Search your emoji here..."}
                className="input-field"
            />
            <h2> {emoji} </h2>
            <h3> {meaning} </h3>
            {emojis.map((emoji) => (
                <span
                    onClick={() => onEmojiClickHandler(emoji)}
                    className="emoji"
                >
                    {emoji}
                </span>
            ))}
        </div>
    );
}

export default App;
