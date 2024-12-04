
export default function CarDisplayFunction() {
    let carsDiv = document.getElementsByClassName("car-div")[0];
    cars.forEach(car => {
        carsDiv.innerHTML += `
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="mb-0">${car.name} <img className="car-logo" src="${car.logo}" alt="${car.name} logo" /></h1>
                    <a href="#${car.name}" className="text-decoration-none" style="color: white;">See more<i className="fa-solid fa-angles-right"></i></a>
                </div>
                <div className="car-display d-flex flex-row gap-3 mb-5" id="${car.name}"></div>
            `;

        let carDiv = document.getElementById(car.name);
        let loop = (car.spec.length > 4) ? 4 : car.spec.length;
        for (let i = 0; i < loop; i++) {
            carDiv.innerHTML += `
                    <div className="card shadow">
                    <div className="card-body">
                    <h5 className="card-title mb-1">${car.spec[i].name}</h5>
                        <div className="d-flex justify-content-between" style="color: #F4F5F6;">
                        <p className="card-text mb-1">SUV</p>
                        <p className="card-text">${car.spec[i].year}</p>
                        </div>
                        <img src="${car.spec[i].image}" alt="${car.spec[i].name} car" />
                        <div className="d-flex justify-content-between mt-2" style="color: #F4F5F6; font-size: 14px;">
                        <p><i className="fa-solid fa-gas-pump me-2"></i>80L</p>
                        <p><i className="fa-solid fa-gear me-2"></i>Manual</p>
                        <p><i className="fa-solid fa-user-group me-2"></i>2 pepople</p>
                        </div>
                        <div className="d-flex justify-content-between">
                        <p className="card-text mb-0">$${car.spec[i].price}</p>
                        <a href="#" className="nav-link view-details">View Details<i className="fa-solid fa-arrow-right-long fa-rotate-by" style="--fa-rotate-angle: -45deg;"></i></a>
                        </div>
                    </div>
                    </div>
                `
        }
    })
    return carsDiv;
}