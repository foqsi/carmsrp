//https://rapidapi.com/Salzzy/api/car-models-and-data

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

const container = document.getElementById('container');
const menuBackgroundPattern = document.getElementById('menu-background-pattern');
const menuBackgroundImage = document.getElementById('menu-background-image');

// For each car make, create a menu item
carMakes.forEach((make, index) => {
    // Create a new div element for the car make
    const carMakeDiv = document.createElement('div');
    // Add the class 'menu-item' to this div
    carMakeDiv.className = 'menu-item';
    // Set the text content of this div to the car make
    carMakeDiv.textContent = make;
    // Append this div to the container
    container.appendChild(carMakeDiv);

    // Add an event listener for mouseover on this div
    carMakeDiv.addEventListener('mouseover', () => {
        // Change the background position of the menu background pattern and image
        menuBackgroundPattern.style.backgroundPosition = `0% ${3 - index * 3}%`;
        menuBackgroundImage.style.backgroundPosition = `0% ${3 + index * 3}%`;
    });

    // Add an event listener for click on this div
    carMakeDiv.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the event from bubbling up to the container
        // Fetch the JSON file for the clicked car make
        fetch(`./makes/${make.toLowerCase()}.json`)
            .then(response => response.json()) // Parse the JSON from the response
            .then(data => {
                // Create a model menu using the fetched data
                createModelMenu(data);
                // Apply the transition effect
                // container.style.transform = 'translateX(-50%)';
                // container.style.transition = 'all 0.7s ease-in-out';

                //TODO Prevent selected items from dimming
            });
    });
});

function createModelMenu(data) {
    // Clear the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // For each model in the data, create a menu item
    data.forEach((model, index) => {
        // Create a new div element for the model
        const modelDiv = document.createElement('div');
        // Add the class 'menu-item' to this div
        modelDiv.className = 'menu-item';
        // Set the text content of this div to the model name
        modelDiv.textContent = model.name;
        // Append this div to the container
        container.appendChild(modelDiv);

        // Add an event listener for click on this div
        modelDiv.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop propagation of the event
            createTrimMenu(model.children);
        });
    });
}



function createTrimMenu(trims) {
    // Clear the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // For each trim in the trims array, create a menu item
    trims.forEach((trim, index) => {
        // Create a new div element for the trim
        const trimDiv = document.createElement('div');
        // Add the class 'menu-item' to this div
        trimDiv.className = 'menu-item';
        // Set the text content of this div to the trim name
        trimDiv.textContent = trim.name;
        // Append this div to the container
        container.appendChild(trimDiv);
    });
}
