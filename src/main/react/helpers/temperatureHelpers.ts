export const getCelsiusFromKelvin = (degree: number) => degree - 273.15;

export const getFahrenheitFromKelvin = (degree: number) => ((9 * (degree - 273)) / 5) + 32;