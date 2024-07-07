import React, { useState } from 'react'
import "../css/Currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_0MdISX6HY2TGc33QkjOxwiB8hBGt4tXm8R1cVCAG";

function Currency() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [result, setResult] = useState(0);

    const exchange = async () => {

        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency);

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=
        ${fromCurrency}`);
        //console.log(response.data.data[toCurrency]);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);

    };

    return (
        <div className="currency-div">

            <div style={{ width: "100%", color: "#fff", backgroundColor: "black", fontFamily: "arial", textAlign: "center" }}>
                <h3>EXCHANGE RATE</h3>
            </div>

            <div style={{ marginTop: "25px" }}>

                <input value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className="amount" />

                <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                    <option>AUD</option>
                    <option>RUB</option>
                    <option>BGN</option>
                    <option>BRL</option>
                    <option>CAD</option>
                    <option>CHF</option>
                    <option>CNY</option>
                    <option>CZK</option>
                    <option>DKK</option>
                    <option>GBP</option>
                    <option>HKD</option>
                    <option>HRK</option>
                    <option>HUF</option>
                    <option>IDR</option>
                    <option>ILS</option>
                    <option>INR</option>
                    <option>ISK</option>
                    <option>JPY</option>
                    <option>KRW</option>
                    <option>MXN</option>
                    <option>MYR</option>
                    <option>NOK</option>
                    <option>NZD</option>
                    <option>PHP</option>
                    <option>PLN</option>
                    <option>RON</option>
                    <option>SEK</option>
                    <option>SGD</option>
                    <option>THB</option>
                    <option>ZAR</option>
                </select>

                <FaRegArrowAltCircleRight style={{ fontSize: "25px", marginRight: "10px" }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency-option">
                    <option>EUR</option>
                    <option>USD</option>
                    <option>TRY</option>
                    <option>AUD</option>
                    <option>RUB</option>
                    <option>BGN</option>
                    <option>BRL</option>
                    <option>CAD</option>
                    <option>CHF</option>
                    <option>CNY</option>
                    <option>CZK</option>
                    <option>DKK</option>
                    <option>GBP</option>
                    <option>HKD</option>
                    <option>HRK</option>
                    <option>HUF</option>
                    <option>IDR</option>
                    <option>ILS</option>
                    <option>INR</option>
                    <option>ISK</option>
                    <option>JPY</option>
                    <option>KRW</option>
                    <option>MXN</option>
                    <option>MYR</option>
                    <option>NOK</option>
                    <option>NZD</option>
                    <option>PHP</option>
                    <option>PLN</option>
                    <option>RON</option>
                    <option>SEK</option>
                    <option>SGD</option>
                    <option>THB</option>
                    <option>ZAR</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className="result" />

            </div>

            <div>
                <button onClick={exchange} className="exchange-button">Çevir</button>
            </div>

        </div>

    );
};

export default Currency