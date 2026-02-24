export default function CounerDisplay({count}){
    return(
        <div>
      <h2>count : {count}</h2>
      { count > 10 && <p>Too High 🚀</p> }
      { count < 0 && <p style={{color:"red"}}>Negative 😬</p> }
        </div>
    )
}