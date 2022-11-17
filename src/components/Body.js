// Internal Css
let parastyle={
    color:'skyblue'
}

let styles={
    internal:{
        color:'orange'
    },
    background:{
        color:'white',
        backgroundColor:'black'
    }
}

function Body(){
    return(
        <>
        <p style={parastyle}>This is body like banner</p>
        <p style={styles.internal}>Internal CSS using nested objects</p>
        <p style={styles.background}>THis is backgroundColor</p>
        </>
    )
}

export default Body