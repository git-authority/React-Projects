import React from 'react'


function InputBox({
    label,                          // "From" or "To"
    amount,                         // Value entered by user
    onAmountChange,                 // Function to update the amount
    onCurrencyChange,               // Function to update currency
    currencyOptions = [],           // All available currencies
    selectCurrency = "usd",         // Currently selected currency
    amountDisable = false,          // Disable input? (true for "To")
    currencyDisable = false,        // Disable dropdown? (false for now)
    className,                      // Optional class overrides

}) {


    return (


        // --------------------------- Div for InputBox Starts ----------------------------------

        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>




            {/* ---------------------------- Half of the Div ----------------------------- */}

            <div className="w-1/2">


                {/* -------------------------------------- Label ---------------------------------- */}

                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                {/* ----------------------------------- Label Ends-------------------------------------- */}





                {/* --------------------------- Input Box for Entering Amount Starts -------------------------- */}

                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />

                {/* --------------------------- Input Box for Entering Amount Ends -------------------------- */}


            </div>

            {/* -------------------------- Half of the Div Ends -------------------------- */}






            {/* ---------------------- Another Half of the Div -------------------------- */}

            <div className="w-1/2 flex flex-wrap justify-end text-right">




                {/* --------------------- Text - Currency Type ----------------------- */}

                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                {/* --------------------- Text - Currency Type Ends -------------------- */}






                {/* ------------------------- Dropdown Starts ----------------------- */}

                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >



                    {/* ------------------ Value of Dropdown Starts ---------------- */}


                    {currencyOptions.map((e) => (
                        <option key={e} value={e}>
                            {e}
                        </option>
                    ))}

                    {/* ------------------- Value of Dropdown Ends ----------------- */}



                </select>

                {/* -------------------------- Dropdown Ends ------------------------ */}




            </div>

            {/* ---------------------- Another Half of the Div Ends -------------------------- */}




        </div>

        // ---------------------------- Div for InputBox Ends ----------------------------------

    );
}

export default InputBox;
