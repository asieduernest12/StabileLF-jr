import React from "react";
import '../Styles/login.css';

export default function Login() {
    return(
        <div class="login-content">
            <div class="login-white-box">
                <h1 class="login-title title">LOGIN</h1>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="email" placeholder="Email"/>
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                      
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password"/>
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button login-button">
                        Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}