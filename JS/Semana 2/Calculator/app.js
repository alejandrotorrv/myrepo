const f = ()=>{
    event.preventDefault();
    let _x=document.getElementById("amount");
    let _y=document.getElementById("taxes");
    let _z=document.getElementById("years");

    let [x,y,z]=[Number(_x.value),Number(_y.value),Number(_z.value)];

    const taxes=(y*.01)*x*z;
    const amount=x+taxes;
    const monthly=amount/(12*z);
    
    let [a,b,c]=[
        document.getElementById("totalmoney"),
        document.getElementById("totaltax"),
        document.getElementById("meses")
    ]
    a.innerHTML=`Total money: $${amount}`;
    b.innerHTML=`Total taxes: $${taxes}`;
    c.innerHTML=`Pay per Month: $${monthly}`;

    
}