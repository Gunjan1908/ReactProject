const ChildComp =(props)=>{

    return (<div>
        <h2>This is child component</h2>
        <p> My Name is:{props.name}</p>
        <p> countis:{props.count}</p>
    </div>)
}
export default ChildComp;