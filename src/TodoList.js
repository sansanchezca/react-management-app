function TodoList({ children }) {
    return(
    <ul className='TodoList'>
        {children}
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    );
}
export { TodoList };