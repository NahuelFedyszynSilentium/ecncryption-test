import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {AES, enc} from 'crypto-js';

function App() {

  const [textToEncode, setTextToEncode] = useState("");
  const [key, setkey] = useState("w9z$C&F)J@NcRfUj");
  const [result, setResult] = useState("");
  const [decoded, setDecoded] = useState("")

  function handleTextChange(value){
    setTextToEncode(value);
  }

  function handleEncodedChange(value){
    setResult(value);
  }

  function handleEncodePress(){
    var encoded = AES.encrypt(textToEncode,key).toString();
    //setResult(encodeURIComponent(encoded));
    setResult(encoded);
  }

  function handleDecodePress(){
    //const decoded = AES.decrypt(decodeURIComponent(result),key);
    const decoded = AES.decrypt(result,key);
    setDecoded(decoded.toString());
    //setDecoded(decoded.toString(enc.Utf8));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="column">
          <p className="paragraph">Key:</p>
          <div className="textContainer">
            <p className="containerText">{key}</p>
          </div>
          <button>Generate Key</button>
          <div className="column">
            <div className="column">
              <p className="paragraphSm">
                Text to Encode
              </p>
              <input type="text" value={textToEncode} onChange={(value)=>{handleTextChange(value.target.value)}}></input>
              <div>
                <button onClick={handleEncodePress}>
                  Encode
                </button>
              </div>
            </div>
            <div className="column">
              <p className="paragraphSm">
                Encoded Text
              </p>
              <div className="column">
                <textarea onChange={(value)=>{handleEncodedChange(value.target.value)}} value={result}>
                </textarea>
                <div>
                  <button onClick={handleDecodePress}>
                    Decode
                  </button>
                </div>
                <textarea value={decoded} readOnly>
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
