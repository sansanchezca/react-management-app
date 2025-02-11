
function TodoCounter({ total, completed}) {
    return (
    <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px',
    }}>
        You have {completed} of {total} tasks.
    </h1>
    );

}

export { TodoCounter }