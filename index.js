//https://rapidapi.com/Salzzy/api/car-models-and-data

const carMakes = [
    "Acura", "Alfa Romeo", "Aston Martin", "Audi", "BMW", "Buick",
    "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ford", "Genesis",
    "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia",
    "Lexus", "Lincoln", "Mazda", "Mercedes-Benz", "Mercury", "Mini",
    "Mitsubishi", "Nissan", "Pontiac", "Ram", "Subaru", "Tesla",
    "Toyota", "Volvo"
];

const makeContainer = document.getElementById('make-container');
const modelContainer = document.getElementById('model-container');
const trimContainer = document.getElementById('trim-container');
const menuBackgroundPattern = document.getElementById('menu-background-pattern');
const menuBackgroundImage = document.getElementById('menu-background-image');


carMakes.forEach((make, index) => {
    const makeDiv = document.createElement('div');
    makeDiv.className = 'menu-item';
    makeDiv.textContent = make;
    makeContainer.appendChild(makeDiv); // Append this div to the container
    makeDiv.addEventListener('mouseover', () => {
        // Move the background image and pattern
        menuBackgroundPattern.style.backgroundPosition = `0% ${3 - index * 3}%`;
        menuBackgroundImage.style.backgroundPosition = `0% ${3 + index * 3}%`;
    });

    makeDiv.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the event from bubbling up to the container

        // Fetch the JSON file for the clicked car make
        fetch(`./makes/${make.toLowerCase()}.json`)
            .then(response => response.json()) // Parse the JSON from the response
            .then(data => {
                // Apply transition effects
                makeContainer.style.transform = 'translateX(-50%)';
                makeContainer.style.transition = 'all 0.7s ease-in-out';

                createModelMenu(data, index);
            });
    });
});

function createModelMenu(data, index) {
    modelContainer.innerHTML = '';

    // modelContainer.style.display = 'block';
    data.forEach((model, modelIndex) => {
        const modelDiv = document.createElement('div');
        modelDiv.className = 'menu-item';
        modelDiv.textContent = model.name;
        modelContainer.appendChild(modelDiv); // Append this div to the container

        modelDiv.addEventListener('mouseover', () => {
            // Move the background image and pattern
            menuBackgroundPattern.style.backgroundPosition = `0% ${3 - modelIndex * 3}%`;
            menuBackgroundImage.style.backgroundPosition = `0% ${3 + modelIndex * 3}%`;
        });

        modelDiv.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the event from bubbling up to the container

            // Apply transition effects
            modelContainer.style.transform = 'translateX(-100%)';
            modelContainer.style.transition = 'all 0.7s ease-in-out';
            createTrimMenu(model.children, modelIndex);
        });
    });
}

function createTrimMenu(trims, index) {
    trimContainer.innerHTML = '';
    // trimContainer.style.display = 'block';
    trims.forEach((trim, trimIndex) => {
        const trimDiv = document.createElement('div');
        trimDiv.className = 'menu-item';
        trimDiv.textContent = trim.name;
        trimContainer.appendChild(trimDiv); // Append this div to the container

        trimDiv.addEventListener('mouseover', () => {
            // Move the background image and pattern
            menuBackgroundPattern.style.backgroundPosition = `0% ${3 - trimIndex * 3}%`;
            menuBackgroundImage.style.backgroundPosition = `0% ${3 + trimIndex * 3}%`;
        });

        trimDiv.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the event from bubbling up to the container

            // Apply transition effects
            trimContainer.style.transform = 'translateX(-100%)';
            trimContainer.style.transition = 'all 0.7s ease-in-out';
        });
    });
}