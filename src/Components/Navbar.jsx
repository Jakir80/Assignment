/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const navLinks = [
    {
        path: '/',
        title: 'Home',
    },

    {
        path: '/about',
        title: 'About us',
    },

    {
        path: '/profile',
        title: 'Partner with us',
    },

    {
        path: '/blogs',
        title: 'Blog',
    },


]
const Navbar = () => {
    return (
        <div className="flex justify-between m-5">
            <img className="w-24 h-24" src="zet_new_logo.7adcc993.svg" alt="" />
            <ul className="flex items-center justify-center m-5">
                {
                    navLinks.map(({ path, title }) => (<li className="mx-2 text-blue-800" key={path}>
                        <Link href={path}>{title}</Link>
                    </li>))
                }

                <button className="btn btn-primary bg-blue-700 p-4 rounded-lg text-white">Download Zed</button>

            </ul>

        </div>

    );
};

export default Navbar;
//rm -rf .git (initialize git repo command)