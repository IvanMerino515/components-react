const TotalPrice = ({price})=>{
    const iva = price*0.21;
    return <h2>El precio es {iva+price}</h2>
}
export default TotalPrice;