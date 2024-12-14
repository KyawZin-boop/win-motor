
export default function Footer() {
    return (
        <div className="footer">
            <div className="footerDiv p-4">
                <div className="contact text-white">
                <h3 className="mb-4 fw-bold">Contact Us</h3>
                <p className="fs-4" style={{color: "var(--link-color)"}}>
                    Win Motor Myanamr Company Limited
                </p>
                <p>
                    Thamine Train Station Road, Yangon, Myanmar, 11061
                </p>
                <h3 className="mb-4" style={{color: "var(--link-color)"}}>
                    +95 9 254 122 299
                </h3>
                <p>Email: info@winmotormm.com</p>
                <p style={{color: "var(--link-color)"}}>www.winmotormyanmar.com</p>
                <div></div>
                </div>
                <div className="links text-white">
                <h3 className="mb-4 fw-bold">Links</h3>
                <p><a href="#" className="nav-link text-white">Home</a></p>
                <p><a href="#" className="nav-link text-white">About</a></p>
                <p><a href="#" className="nav-link text-white">Contact</a></p>
                <p><a href="#" className="nav-link text-white">Privacy Policy</a></p>
                <p><a href="#" className="nav-link text-white">Terms & Conditions</a></p>
                </div>
                <div className="map">
                <div
                    style={{
                    position: "relative",
                    overflow: "hidden",
                    height: 0,
                    maxWidth: "100%",
                    height: "auto",
                    }}
                >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d401.3519082938324!2d96.11312787897198!3d16.85984175847764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195628a7cdb69%3A0x7e1b71ad7278a438!2sWin%20Motor%20Myanmar!5e0!3m2!1sen!2smm!4v1732732854448!5m2!1sen!2smm" 
                        width="600" 
                        height="300" 
                        style={{border:"0"}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                </div>
            </div>
        </div>
    )
}