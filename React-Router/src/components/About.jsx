export default function About() {
    return (



        <div className="py-16 bg-white">



            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">



                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">



                    {/* -------------------------------- Top Left Side Photo Starts ---------------------------------- */}

                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg"
                            alt="image"
                        />
                    </div>

                    {/* -------------------------------- Top Left Side Photo Ends ---------------------------------- */}





                    {/* -------------------------------- Content Beside Image Starts ---------------------------------- */}

                    <div className="md:7/12 lg:w-6/12">


                        {/* -------------------------------- Top Bold Text Starts ---------------------------------- */}

                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>

                        {/* -------------------------------- Top Bold Text Ends ---------------------------------- */}




                        {/* -------------------------------- First Paragraph Starts ---------------------------------- */}

                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>

                        {/* -------------------------------- First Paragraph Ends ---------------------------------- */}




                        {/* -------------------------------- Second Paragraph Starts ---------------------------------- */}

                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>

                        {/* -------------------------------- Second Paragraph Ends ---------------------------------- */}


                    </div>

                    {/* -------------------------------- Content Beside Image Ends ---------------------------------- */}



                </div>



            </div>



        </div>



    );
}