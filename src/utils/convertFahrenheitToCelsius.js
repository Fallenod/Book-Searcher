function convertFahrenheitToCelsius(degrees = 0) {
    const result = Math.ceil(degrees-273.15);
    return `${result}°C`;
}
export default convertFahrenheitToCelsius;