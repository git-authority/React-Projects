import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {


  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);


  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }



  if (Object.keys(currencyInfo).length === 0) {
    return <div className="text-white">Loading currencies...</div>;
  }



  return (

    // ----------------------------- Black Background -------------------------------------------
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover"
      style={{
        backgroundImage : "url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg')"
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
              convert()
            }}
          >



            {/* -------------------------------- "From" Input Box ------------------------------------------ */}

            <div className="w-full mb-1">

              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectCurrency={from}
              />

            </div>

            {/* ----------------------------- "From" Input Box Ends --------------------------------------- */}






            {/* ------------------------------ Swap Button --------------------------------- */}

            <div className="relative w-full h-0.5">

              <button
                type="button"
                className=" cursor-pointer absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap

              </button>

            </div>

            {/* ---------------------------- Swap Button Ends ------------------------------ */}







            {/* ------------------------------------ "To" Input Box --------------------------------------------- */}

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                onAmountChange={(amount) => setAmount(amount)}
                amountDisable={true}
              />
            </div>

            {/* ----------------------------------- "To" Input Box Ends --------------------------------------------- */}







            {/* ------------------------------------- Convert Button ------------------------------------------- */}

            <button type="submit" className=" cursor-pointer w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
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
