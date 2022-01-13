import car from '../images/car.png'

export default function CartWidget ({Items}){
    return(
        <>
            <div className="Carrito" >
                <img src={car} style={{width:20,heigth:20}}/>
                <a className="nav-link" href="#">{Items}</a>
            </div>       
        </>
    )
}