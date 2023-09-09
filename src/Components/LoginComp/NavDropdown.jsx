import * as React from "react";
import Link from "next/link";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavDropdown = () => {
    const [active, setActive] = React.useState("");

    const style = "text-sky-600 font-bold border-b-2 border-sky-600";
    return (
        <DropdownMenu className="shadow-lg">
            <DropdownMenuTrigger asChild>
              <button
                                data-collapse-toggle="mobile-menu-2"
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <svg
                                    className="hidden w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <div className="card p-3 text-lg">
                    <div
                    // className={`hover:text-sky-600 font-semibold text-gray-500 ${
                    //     active == "home" ? style : ""
                    // }`}
                    >
                        <Link
                            href="#home"
                            onClick={() => {
                                setActive("home");
                            }}
                            className={`hover:text-sky-600 font-semibold text-gray-500 ${
                                active == "home" ? style : ""
                            }`}
                        >
                            Home
                        </Link>
                    </div>

                    <div>
                        <Link
                            href="#home"
                            onClick={() => {
                                setActive("about");
                            }}
                            className={`hover:text-sky-600 font-semibold text-gray-500 ${
                                active == "about" ? style : ""
                            }`}
                        >
                            About
                        </Link>
                    </div>

                    <div>
                        <Link
                            href="#home"
                            onClick={() => {
                                setActive("contact");
                            }}
                            className={`hover:text-sky-600 font-semibold text-gray-500 ${
                                active == "contact" ? style : ""
                            }`}
                        >
                            Contact
                        </Link>
                    </div>

                    <div>
                        <Link
                            href="#home"
                            onClick={() => {
                                setActive("service");
                            }}
                            className={`hover:text-sky-600 font-semibold text-gray-500 ${
                                active == "service" ? style : ""
                            }`}
                        >
                            Service
                        </Link>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default NavDropdown;
