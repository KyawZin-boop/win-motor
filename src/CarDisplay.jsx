import cars from "./cars.js"
export default function CarDisplay() {
        
    return (
        <div className="content py-5">
            <div className="container">
                <h1
                className="text-center mb-5"
                style={{color: "var(--primary-color)", textShadow: "2px 2px 2px #fcfcfc"}}
                >
                Imported Electronic Vehicles
                </h1>
                <div className="car-div">
                    {cars.map((car, i) => (
                        <>
                        <div key={car.name + i}>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h1 className="mb-0">{car.name.toUpperCase()}
                                    {/* <img className="car-logo" src={car.logo} alt={`${car.name} logo`} /> */}
                                </h1>
                                <a href={`#${car.name}`} className="text-decoration-none" style={{color: "white"}}>
                                    See more<i className="fa-solid fa-angles-right"></i>
                                </a>
                            </div>
                            <div className="car-display d-flex flex-row gap-3 mb-5" key={i}>
                                {car.spec.slice(0, 4).map((spec, j) => ( 
                                    <div key={`${spec.name}-${j}`} className="card shadow">
                                        <div className="card-body">
                                        {/* <h5 className="card-title mb-1">{spec.name}</h5> */}
                                            {/* <div className="d-flex justify-content-between" style={{color: "var(--primary-color)"}}>
                                            <p className="card-text mb-1">SUV</p>
                                            <p className="card-text">{spec.year}</p>
                                            </div> */}
                                            <img src={spec.image} alt={`${spec.name} car`} />
                                            <div className="d-flex justify-content-between mt-2" style={{color: "var(--primary-color)", fontSize: "14px"}}>
                                                <p><i className="fa-solid fa-gas-pump me-2"></i>80L</p>
                                                <p><i className="fa-solid fa-gear me-2"></i>Manual</p>
                                                <p><i className="fa-solid fa-user-group me-2"></i>2 pepople</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                            <p className="card-text mb-0">$ {spec.price}</p>
                                            <a href="#" className="nav-link view-details">View Details<i className="fa-solid fa-arrow-right-long" style={{ transform: 'rotate(-45deg)'}}></i></a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}