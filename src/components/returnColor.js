function returnColor(temperature){
    if (temperature < 20) { return "#686de0" }
    if (temperature < 30) { return "#2980b9" }
    if (temperature < 40) { return "#3498db" }
    if (temperature < 50) { return "#7ed6df" }
    if (temperature < 60) { return "#f6e58d" }
    if (temperature < 70) { return "#f1c40f" }
    if (temperature < 80) { return "#f39c12" }
    if (temperature < 90) { return "#ff7979" }
    else { return "#d35400" }
}

export default returnColor;