import { useState } from 'react'
import './App.css'
import InputBox from './InputBox';

function App() {


  return (

    // ----------------------------- Black Background -------------------------------------------
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center"
      style={{
        backgroundColor: 'black'
      }}
    >


      {/* -------------------------------- Outer Div for Entire Form ----------------------------- */}

      <div className="w-full">


        {/* ------------------------------- Inner Div for Entire Form ------------------------------------ */}

        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">


          {/* ---------------------------------- Entire Form -------------------------------------------- */}

          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >



              {/* -------------------------------- "From" Input Box ------------------------------------------ */}

              <div className="w-full mb-1">

                  <InputBox
                    label="From"

                    />

              </div>

              {/* ----------------------------- "From" Input Box Ends --------------------------------------- */}






              {/* ------------------------------ Swap Button --------------------------------- */}

              <div className="relative w-full h-0.5">

                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">

                    Swap

                </button>

              </div>

              {/* ---------------------------- Swap Button Ends ------------------------------ */}







              {/* ------------------------------------ "To" Input Box --------------------------------------------- */}

              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                />
              </div>

              {/* ----------------------------------- "To" Input Box Ends --------------------------------------------- */}







              {/* ------------------------------------- Convert Button ------------------------------------------- */}

              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert
              </button>

              {/* ----------------------------------- Convert Button Ends ----------------------------------------- */}




          </form>

          {/* ---------------------------------- Entire Form Ends --------------------------------- */}


        </div>

        {/* ------------------------------- Inner Div for Entire Form Ends ------------------------------- */}




      </div>

      {/* -------------------------------- Outer Div for Entire Form Ends ---------------------------- */}


    </div>

    // ---------------------------- Black Background Ends ----------------------------------------


  );
}

export default App
