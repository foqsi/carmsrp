carMakes.forEach((make, index) => {
    const makeDiv = document.createElement('div');
    makeDiv.className = 'menu-item';
    makeDiv.textContent = make;
    container.appendChild(makeDiv);  // Append this div to the container

    makeDiv.addEventListener('mouseover', () => {
        menuBackgroundPattern.style.backgroundPosition = `0% ${3 - index * 3}%`;
        menuBackgroundImage.style.backgroundPosition = `0% ${3 + index * 3}%`;
    });

    makeDiv.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the event from bubbling up to the container
        // Fetch the JSON file for the clicked car make
        fetch(`./makes/${make.toLowerCase()}.json`)
            .then(response => response.json()) // Parse the JSON from the response
            .then(data => {
                // Create a model menu using the fetched data
                createModelMenu(data, index);
                // Apply the transition effect
                // container.style.transform = 'translateX(-50%)';
                // container.style.transition = 'all 0.7s ease-in-out';

                //TODO Prevent selected items from dimming
                // For each model in the data, create a menu item
                data.forEach((model, index) => {
                    const modelDiv = document.createElement('div');
                    modelDiv.className = 'menu-item';
                    modelDiv.textContent = model.name;
                    container.appendChild(modelDiv);

                    createTrimMenu(model.children);


                    modelDiv.addEventListener('mouseover', () => {
                        menuBackgroundPattern.style.backgroundPosition = `0% ${3 - index * 3}%`;
                        menuBackgroundImage.style.backgroundPosition = `0% ${3 + index * 3}%`;
                    });
                });
            });

    });

});

function createModelMenu(data) {
    // Clear the container



}

function createTrimMenu(trims) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // For each trim in the trims array, create a menu item
    trims.forEach((trim) => {
        const trimDiv = document.createElement('div');
        trimDiv.className = 'menu-item';
        trimDiv.textContent = trim.name;
        container.appendChild(trimDiv);

        trimDiv.addEventListener('mouseover', () => {
            menuBackgroundPattern.style.backgroundPosition = `0% ${3 - index * 3}%`;
            menuBackgroundImage.style.backgroundPosition = `0% ${3 + index * 3}%`;
        });
    });
}

function toggleMenu() {

}

