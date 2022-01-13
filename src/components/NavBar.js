import CartWidget from "./CartWidget"

export default function NavBar ({links, Items}){
    return(
        <>
            <div className="navbar navbar-expand-md navbar-light bg-light border-3 border-bottom border-primary">
                <div className="container-fluid">
                    <a href='#' class="navbar-brand">PetShop</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#NavMenu">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div id="NavMenu">
                        <ul className="navbar-nav ms-5">
                            {links.map(link => <li className="nav-item"><a className="nav-link" href="#">{link}</a></li>)}
                            <CartWidget Items={Items}/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}