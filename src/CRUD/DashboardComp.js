import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button,Modal } from 'react-bootstrap';

const DashboardComp = () => {
    const [product, setProduct] = useState([]);
    const [item, setItem] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setItem(data)
        setShow(true)
    };
  
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:5050/product").then((res) => {
            console.log(res.data);
            setProduct(res.data);
        }).catch((err) => { })

    }
    const deleteData=(id)=>{
      if(window.confirm(`are you sure to delete record with id: ${id}`)){
        axios.delete(`http://localhost:5050/product/${id}`).then(() => {
            //console.log(id);
            window.alert("product deleted successfully");
            fetchData();
            
        }).catch((err) => { })
      }
       
    }
    return (
        <div>
            <h2>Dash Board component</h2>
            <Link to="/addproduct" className='btn btn-outline-success btn-sm' style={{"float":"left"}}><i class="fa fa-plus-square" aria-hidden="true">Add</i></Link>
            <table className='table table-success table-striped table-bordered'>
                <thead className=' table-light'>

                    <th>Sr.no</th><th>Name</th><th>price</th><th>company</th><th>Action</th>

                </thead>
                <tbody>
                    {product.map((val, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.price}</td>
                            <td>{val.company}</td>
                            <td>
                                <Button variant='outline-primary'className='btn-sm' onClick={()=>handleShow(val)}>
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                    </Button>{" "}
                                <Link to={`/editproduct/${val.id}`} className='btn btn-outline-success btn-sm' > <i class="fa fa-pencil" aria-hidden="true"></i>
                                 </Link>{" "}
                                <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>deleteData(val.id)}> <i class="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            {/* model start here */}
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <table><tr><th>Id:</th><th>{item.id}</th></tr>
         <tr><th>Name:</th><th>{item.name}</th></tr>
         <tr><th>Price:</th><th>{item.price}</th></tr>
         <tr><th>company:</th><th>{item.company}</th></tr>
         </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default DashboardComp
