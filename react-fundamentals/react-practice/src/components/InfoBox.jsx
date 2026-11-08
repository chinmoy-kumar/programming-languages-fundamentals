import "./Box.css";

export default function InfoBox({name, email})
{
    return(
        <div className="box">
            <p>Name: {name}</p>
            <p>E-mail: {email}</p>
        </div>
    )
}