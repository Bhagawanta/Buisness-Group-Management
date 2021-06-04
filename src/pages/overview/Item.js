import React, { useState } from 'react'
import { Form,Row,Col,Button,Container} from 'react-bootstrap'
const  Item = () => {

    const [po,setPo] = useState('');
    const [podate,setPodate] = useState("");
    const [vname,setVname] = useState("");
    const [iname,setIname] = useState('');
    const [imake,setImake] = useState('');
    const [iqty,setIqty] = useState('');
    const [ivalue,setIvalue] = useState('');
    const [dod,setDod] = useState('');
    const [doi, setDoi] = useState('');
    const [warranty, setWarranty] = useState('');
    const [wupto, setWupto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Hello"+podate);
    }
    return (
        <React.Fragment>
        <Container style={{marginLeft:350,marginTop:50}} fluid="md">
       <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}  >
                <Form.Label column sm={2}>
                 PO
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="PO" value={po} onChange={(e)=>setPo(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}  >
                <Form.Label column sm={2}>
                 PO Date
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="date" placeholder="PO Date" value={podate} onChange={(e)=>setPodate(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}    >
                <Form.Label column sm={2}>
                Vendor Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Vendor Name" value={vname} onChange={(e)=>setVname(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}    >
                <Form.Label column sm={2}>
                Item Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Item Name" value={iname} onChange={(e)=>setIname(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}    >
                <Form.Label column sm={2}>
                Item Make
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Item Make" value={imake} onChange={(e)=>setImake(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}    >
                <Form.Label column sm={2}>
                Item Qty
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Item Qty" value={iqty} onChange={(e)=>setIqty(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}    >
                <Form.Label column sm={2}>
                Item Value
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Item Value" value={ivalue} onChange={(e)=>setIvalue(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}    >
                <Form.Label column sm={2}>
                Date of Delivery
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="date" placeholder="Date of Delivery" value={dod} onChange={(e)=>setDod(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}    >
                <Form.Label column sm={2}>
                Date of Installation
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="date" placeholder="Date of Installation" value={doi} onChange={(e)=>setDoi(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}    >
                <Form.Label column sm={2}>
                Warranty (In Years)
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Warranty" value={warranty} onChange={(e)=>setWarranty(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}    >
                <Form.Label column sm={2}>
                Warranty Upto
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="date" placeholder="Warranty Upto" value={wupto} onChange={(e)=>setWupto(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
                </Col>
            </Form.Group>
        </Form>

        </Container>
    </React.Fragment>
    )
}

export default Item
