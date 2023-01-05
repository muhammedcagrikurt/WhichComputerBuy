import React from "react";

const Gpu= () =>{
    return(
    <div>

        <h2>Ekran Kartı Seçiniz</h2>
        <select>
            <option value={1}>1650</option>
            <option value={2}>1650 Ti</option>
            <option value={3}>3050</option>
            <option value={4}>3053 Ti</option>
            <option value={5}>3060</option>
        </select>
    </div>
    );
};
export default Gpu;