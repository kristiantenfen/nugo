
export const randomNumber = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

export const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export function toCurrency(value, currency = 'R$ ') {
    const val = (value / 1).toFixed(2).replace('.', ',');
    return currency + '' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }