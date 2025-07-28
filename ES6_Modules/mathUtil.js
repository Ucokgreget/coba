export const PI = 3.14159;

export function getKeliling(radius){
    return 2 * PI * radius;
}

export function getLuas(radius){
    return PI * radius * radius;
}

export function getVolume(radius){
    return (4/3) * PI * radius * radius * radius;
}