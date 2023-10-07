import logo from '../../assets/logo-white.png';

export default function Logo() {
    return (

        <a href="/">
            <img
                className="hidden sm:flex h-16 w-auto"
                src={logo}
                alt="ALL CAR DB LOGO"
            />
        </a>

    );
}
