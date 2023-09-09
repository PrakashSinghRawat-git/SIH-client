import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavDropdown from "@/Components/LoginComp/NavDropdown";

const Navigation = ({ handleLogin }) => {
    const [active, setActive] = useState("");

    const style = "text-sky-600 font-semibold font-bold";

    return (
        <>
            <Head>{`<style>
        header{
          font-family: 'Abril Fatface', cursive;
          font-family: 'Roboto', sans-serif;
        }
      </style>`}</Head>
            <header className="fixed w-full z-50" >
                <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <Link href="#" className="flex items-center">
                            {/* <Image
              src="/images/logo.svg"
              width={24}
              height={36}
              className="h-6 mr-3 sm:h-9"
              alt="ECOMER Logo"
            /> */}
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                Testhouse
                            </span>
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <button
                                onClick={handleLogin}
                                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                            >
                                Login
                            </button>
                            <div className="hamburgerMenu lg:hidden mr-5">
                                <NavDropdown />
                            </div>
                        </div>
                        <div
                            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link
                                        href="#home"
                                        aria-current="page"
                                        onClick={() => {
                                            setActive("home");
                                        }}
                                        className={`block py-2 pl-3 pr-4 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                                            active == "home" ? style : ""
                                        }`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#about"
                                        onClick={() => {
                                            setActive("about");
                                        }}
                                        className={`block py-2 pl-3 pr-4 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                                            active == "about" ? style : ""
                                        }`}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#categories"
                                        onClick={() => {
                                            setActive("categories");
                                        }}
                                        className={`block py-2 pl-3 pr-4 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                                            active == "categories" ? style : ""
                                        }`}
                                    >
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#contact"
                                        onClick={() => {
                                            setActive("contact");
                                        }}
                                        className={`block py-2 pl-3 pr-4 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                                            active == "contact" ? style : ""
                                        }`}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#services"
                                        onClick={() => {
                                            setActive("services");
                                        }}
                                        className={`block py-2 pl-3 pr-4 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                                            active == "services" ? style : ""
                                        }`}
                                    >
                                        Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navigation;
