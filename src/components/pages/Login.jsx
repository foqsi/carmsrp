import { useState } from 'react';
import logo from "../../assets/logo/logo-black.png";
import CreateAccount from "../accounts/CreateAccount";
import SignIn from "../accounts/SignIn";

export default function Login() {
    const [createAccount, setCreateAccount] = useState(false);


    return (
        <div className="flex flex-col items-center justify-center w-full h-screen mt-[-100px]">
            <img src={logo} alt="logo" className="w-72 h-auto mb-6" />
            {createAccount ? (
                <CreateAccount setCreateAccount={setCreateAccount} />
            ) : (
                <SignIn setCreateAccount={setCreateAccount} />
            )}
        </div>
    );
}