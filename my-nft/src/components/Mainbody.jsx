import {useState} from "react";
import "../styles/mainbody.css";

function Mainbody() {

    const [connected, setConnected] = useState(false);

    return(
        <div className="container">

            <h1 className="title">

                Quasar Token

            </h1>

            <div className="buttons">

                {connected ?
                    <button className="mint">
                        Mint
                    </button>
                    :
                    <button className="connect">
                        Connect
                    </button>
                }

            </div>

            <div className="subtitle">

                { connected ?
                    <h3>
                        You are allowed to Mint
                    </h3>
                    :
                    <h3>
                        Connect to Metamask
                    </h3>
                }

            </div>

        </div>
    )
}

export default Mainbody;