import Body from './body';
import Header from './header'
import HeaderClass from './headerClass';



function App(){
    let nameis='sasi'
    return(
        <>
        <HeaderClass mynam={nameis}/>
        <Body />
        </>
    )
}

export default App