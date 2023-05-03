const carMakes = [
    "Acura",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Dodge",
    "Ford",
    "Genesis",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lexus",
    "Lincoln",
    "Mazda",
    "Mercedes-Benz",
    "Mercury",
    "Mini",
    "Mitsubishi",
    "Nissan",
    "Pontiac",
    "Ram",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volvo"
];

const container = document.getElementById('menu-items');
const menuBackgroundPattern = document.getElementById('menu-background-pattern');
const menuBackgroundImage = document.getElementById('menu-background-image');

carMakes.forEach((make, index) => {
    const carMakeDiv = document.createElement('div');
    carMakeDiv.className = 'menu-item';
    carMakeDiv.textContent = make;
    container.appendChild(carMakeDiv);

    carMakeDiv.addEventListener('mouseover', () => {
        menuBackgroundPattern.style.backgroundPosition = `0% ${3 - index * 3}%`;
        menuBackgroundImage.style.backgroundPosition = `0% ${3 + index * 3}%`;
    });
});