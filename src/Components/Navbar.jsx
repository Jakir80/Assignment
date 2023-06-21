import Image from "next/image";
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
          <Image src="/headerlogo.svg" alt="Logo" width={200} height={100} />
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