import { Link } from "react-router-dom";

export default function Footer() {
    return (


        // ------------------------------------------------------ Footer Starts -------------------------------------------------------------

        <footer className="bg-white border-y">



            {/* ------------------------------------------- Div for Footer Starts ----------------------------------------------------- */}

            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">




                {/* ---------------------- Outer Div for Logo and Right Side of Footer Starts -------------------------------------- */}

                <div className="md:flex md:justify-between">


                    {/* ------------------------------------- Logo Starts ----------------------------------------------- */}

                    <div className="mb-6 md:mb-0">

                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>

                    </div>

                    {/* ------------------------------------- Logo Ends ----------------------------------------------- */}





                    {/* ----------------------------------- Div for Right Side of Footer Starts ----------------------------------- */}

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">



                        {/* ---------------------------------- First Column Starts ---------------------------------------------- */}

                        <div>

                            {/* -------------------------------- Resources Start --------------------------------------------- */}

                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>

                            {/* --------------------------------- Resources End --------------------------------------------- */}


                            {/* ------------------------------- List Start -------------------------------- */}

                            <ul className="text-gray-500 font-medium">

                                {/* --------------------------- Home Starts ----------------------------------- */}

                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>

                                {/* --------------------------- Home Ends ----------------------------------- */}




                                {/* --------------------------- About Starts ----------------------------------- */}

                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>

                                {/* ---------------------------About Ends ----------------------------------- */}

                            </ul>

                            {/* ---------------------------------- List End ----------------------------------------- */}

                        </div>

                        {/* ---------------------------------- First Column Ends ---------------------------------------------- */}




                        {/* ---------------------------------- Second Column Starts ----------------------------------------- */}

                        <div>


                            {/* -------------------------------- Follow Us Starts --------------------------------------------- */}

                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us</h2>

                            {/* --------------------------------- Follow Us Ends --------------------------------------------- */}



                            {/* -------------------------------- List Starts --------------------------------------------- */}

                            <ul className="text-gray-500 font-medium">

                                {/* ----------------------------- GitHub Starts ------------------------------------------- */}

                                <li className="mb-4">
                                    <a
                                        href="https://github.com/git-authority"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>

                                {/* ----------------------------- GitHub Ends ------------------------------------------- */}




                                {/* ----------------------------- Discord Starts ----------------------------------------- */}

                                <li>
                                    <a
                                        href="https://discord.com/users/Abhrasnata#5301"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Discord
                                    </a>
                                </li>

                                {/* ----------------------------- Discord Ends ----------------------------------------- */}

                            </ul>

                            {/* -------------------------------- List Ends --------------------------------------------- */}



                        </div>

                        {/* ---------------------------------- Second Column Ends ----------------------------------------- */}




                        {/* ---------------------------------- Third Column Starts ----------------------------------------- */}

                        <div>


                            {/* ------------------------- Legal Starts ---------------------------------- */}

                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>

                            {/* ------------------------- Legal Ends ---------------------------------- */}



                            {/* ---------------------------- List Starts ----------------------------------- */}

                            <ul className="text-gray-500 font-medium">



                                {/* -------------------- Privacy Policy Starts ----------------------------------- */}

                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>

                                {/* -------------------- Privacy Policy Ends ----------------------------------- */}



                                {/* -------------------- TnC Starts ----------------------------------- */}

                                <li>
                                    <Link to="/" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>

                                {/* -------------------- TnC Starts ----------------------------------- */}



                            </ul>

                            {/* ---------------------------- List Ends ----------------------------------- */}



                        </div>

                        {/* ---------------------------------- Third Column Ends ----------------------------------------- */}



                    </div>

                    {/* ----------------------------------- Div for Right Side of Footer Ends ------------------------------------- */}



                </div>

                {/* ---------------------- Outer Div for Logo and Right Side of Footer Ends -------------------------------------- */}






                {/* -------------------------------------- Horizontal Line Starts ------------------------------------------------- */}

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                {/* -------------------------------------- Horizontal Line Ends ------------------------------------------------- */}





                {/* --------------------------------------- Lowest Part of Footer Starts --------------------------------------- */}

                <div className="sm:flex sm:items-center sm:justify-between">


                    {/* ------------------- "© 2025 Abhrasnata Ray. All Rights Reserved." Starts ------------------------- */}

                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025 Abhrasnata Ray. All Rights Reserved.
                    </span>

                    {/* ------------------- "© 2025 Abhrasnata Ray. All Rights Reserved." Ends ------------------------- */}



                    {/* ------------------------------ Links to Socials Start ------------------------------------------ */}

                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">



                        {/* --------------------------------- Discord Starts ------------------------------------------- */}

                        <a
                            href="https://discord.com/users/Abhrasnata#5301"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </a>


                        {/* --------------------------------- Discord Ends ------------------------------------------- */}




                        {/* --------------------------------- Twitter Starts ------------------------------------------- */}

                        <a
                            href="https://x.com/abhrasnata_btc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>

                            <span className="sr-only">Twitter page</span>

                        </a>

                        {/* --------------------------------- Twitter Ends ------------------------------------------- */}




                        {/* --------------------------------- GitHub Starts ------------------------------------------- */}

                        <a
                            href="https://github.com/git-authority"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>

                            <span className="sr-only">GitHub account</span>

                        </a>

                        {/* --------------------------------- GitHub Ends ------------------------------------------- */}



                    </div>

                    {/* ------------------------------ Links to Socials End ------------------------------------------ */}


                </div>

                {/* --------------------------------------- Lowest Part of Footer Ends --------------------------------------- */}




            </div>

            {/* ------------------------------------------- Div for Footer Ends ----------------------------------------------------- */}



        </footer>

        // ------------------------------------------------------- Footer Ends -------------------------------------------------------------

    );
}