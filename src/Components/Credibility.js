import React from "react";

const Credibility=()=>{
    return(
    <div>

    <h2>Güvenilirlik Durumu Seçiniz</h2>
        <select>
            <option value={1}>Evet</option>
            <option value={0}>Nötr</option>
            <option value={-1}>Hayır</option>
        </select>
    </div>
    );
};

export default Credibility;