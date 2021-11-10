export default function Platform({slug}) {

    if(slug==='pc'){
        return <i className="fas fa-desktop"></i>
    }
     if(slug==='playstation'){
        return <i className="fab fa-playstation"></i>
    }
     if(slug==='xbox'){
        return <i className="fab fa-xbox"></i>
    }

    return (
        <div>
           
        </div>
    )
}
