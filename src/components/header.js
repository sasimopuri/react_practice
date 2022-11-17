import './../styles/header.css'

let dynamicclass;
let adddynamicclass = true;

if(adddynamicclass){
    dynamicclass='heade';
}
else{
    dynamicclass='header'
}


function Header(){
    return(
        <>
        <h1>HELLO</h1>
        <h1 className="header">Heading external style</h1>
        <h1 className={dynamicclass}>Adding class dynamically</h1>
        
        </>
    )
}


export default Header;