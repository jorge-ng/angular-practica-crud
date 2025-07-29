export interface CarById {
    brand: string,
    model: string,
    id: string,
    total: number
    carDetails: CarDetails[];
}

export interface CarDetails {
    availability: boolean,
    currency: string,
    licensePlate: string,
    manuFactureYear: number,
    mileage: number,
    price: number,
    refistrationDate: string
}