import './TodoButton.css';

function TodoButton() {
    return(
        <button 
            className="TodoButton"
            onClick={
            () => alert('le diste click')
            }
        >Add +</button> 
    );
}
export { TodoButton }