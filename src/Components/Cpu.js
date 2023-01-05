import React from "react";

const Cpu =()=>{
    return(
        <div>

            <h2>İşlemci Seçiniz</h2>
            <select>
                <option value={1}>i5</option>
                <option value={2}>i7</option>
            </select>
            <h2>İşlemci Nesili Seçiniz</h2>
            <select>
                <option value={2}>11.Nesil</option>
                <option value={1}>12.Nesil</option>
            </select>
        </div>
    );
};
export default Cpu;