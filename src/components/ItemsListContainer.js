export default function NavBar ({Productos}){
    return(
        <>
            <div>
                <ul className="card">
                {Productos.map(item =><p>{item}</p>)}
                </ul>
            </div>
        </>
    )
}