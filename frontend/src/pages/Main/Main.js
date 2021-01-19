import React from 'react';
import './Main.css';
import logo from '../../assets/logo.svg';
import dislike from '../../assets/dislike.svg';
import like from '../../assets/like.svg';

export default function Main({ match }) {
    return(
        <div className="main-container">
            <img src={logo} alt="Tindev"/>
            <ul>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/43411883?v=4" alt=""/>
                    <footer>
                        <strong>Igor Agueme</strong>
                        <p>Engenheiro de Software estudante de backend, atualmente estudando NodeJS, Java, Golang, Elixir e outros.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars3.githubusercontent.com/u/43411883?v=4" alt=""/>
                    <footer>
                        <strong>Igor Agueme</strong>
                        <p>Engenheiro de Software estudante de backend, atualmente estudando NodeJS, Java, Golang, Elixir e outros.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars3.githubusercontent.com/u/43411883?v=4" alt=""/>
                    <footer>
                        <strong>Igor Agueme</strong>
                        <p>Engenheiro de Software estudante de backend, atualmente estudando NodeJS, Java, Golang, Elixir e outros.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}