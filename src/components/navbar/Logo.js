import logo from '../../assets/logo/logo-white-custom.png';

export default function Logo() {
    return (

        <a href="/">
            <img
                className="hidden sm:flex h-12 w-auto"
                src={logo}
                alt="ALL CAR DB LOGO"
            />
        </a>

    );
}
