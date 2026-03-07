async function predict(){

    const text = document.getElementById("comment").value;

    if(text.trim() === ""){
        alert("Please enter a comment.");
        return;
    }

    const response = await fetch("/predict",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({text:text})
    });

    const data = await response.json();

    let resultHTML = "";

    for(const key in data){

        let value = data[key];

        let percent = value * 100;

        let color = value > 0.5 ? "#ff4d4d" : "#4CAF50";

        resultHTML += `
        <div class="result-item">

            <div class="label-row">
                <span>${key}</span>
                <span>${percent.toFixed(0)}%</span>
            </div>

            <div class="bar-container">
                <div class="bar" style="width:${percent}%; background:${color};"></div>
            </div>

        </div>
        `;
    }

    document.getElementById("result").innerHTML = resultHTML;
}