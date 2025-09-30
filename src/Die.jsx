export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    function hold(){
        props.hold(props.id)
    }
    return (
        <button className="die" style={styles} onClick={hold}>{props.value}</button>
    )
}