import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button, InputGroup, Dropdown, DropdownButton,FormControl, Spinner  } from 'react-bootstrap'
import Credential, {NotifyBackMomoApproval} from './Credential'

//importing functions to make request.
import { getInnitialData, submitExchange, getCurrencies} from '../util/api'
import { Z_STREAM_ERROR } from 'zlib'
function TransferFund(props) {
    const [tel, setTel] = useState(0)
    const [err, setError] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [amount, setAmount] = useState(0)
    const [currency, setCurrency] = useState({name:"USD", rating: 1.5})
    const [currencyList, setCurrencyList ] = useState([])
    //displays the modal notifying the user for approving mobildmoney transaction
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        getCurrencies().then((res) => 
            setCurrencyList(res.data) //pupulate the state witht he response data
        )
        .catch((err) => {
            setError(err.data.fail) //set errors to state
        })
    }, [])
    useEffect(() => {
        getInnitialData(1)
        //fetch("url",)
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => resolve({data: {name: "harisu", class: "not a student"}}),1000)
        // })
    }, [])
   const onChange = (e) => {
        if(e.target.name === "tel"){
            setTel(e.target.value)
        } 
        else if(e.target.name === "amount"){
            setAmount(e.target.value)
        } 

    }
    const submit = () => {
        const body = { 
            _email: 'fanyuiharisu@gmail.com',
            _tel: 675955931,
            _amount: amount* currency.rating,
    
        }
        setModalShow(true) //show the modal displaying the approval via momo
        setProcessing(true)
        console.log("submitting the values")
        submitExchange(1, body)
        .then((res)=> {
            console.log("response is", res)
            setProcessing(false)
            setModalShow(false) //close the modal as the transactio is successfull
            props.setCreds();
        })
        .catch((err) => {
            setProcessing(false)
            setModalShow(false) //close the modal as the transactio is successfull

            console.log("error ", err)
        })

    }
    const processform = () => {
        setProcessing(true)
        let totalamount = currency.rating * amount;

        console.log("the total amount is ", totalamount);
    }

    return (
        <div className="container">
            <NotifyBackMomoApproval
                processing={processing}
                price={amount*currency.rating}
                number={tel}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Form>
                <Row>
                    <Col> 

                        <Form.Group controlId="tel">
                          <Form.Label> Telephone </Form.Label>
                          <Form.Control onChange={onChange} name="tel" placeholder="Telephone" />
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title={currency.name}
                                id="currency-dropdown"
                            >
                                {
                                    currencyList.map((elt, key) => <Dropdown.Item key= {key} onClick={()=> setCurrency(elt)} href="#"> {elt.name} </Dropdown.Item> )
                                }
                            </DropdownButton>
                            <FormControl name="amount" onChange={onChange} aria-describedby="basic-addon1" />
                        </InputGroup>
                    </Col>
                    <Col style={{alignItems: "flex-end ", alignSelf: "flex-end"}}>
                       <div className=" container center">
                        <InputGroup>

                       <Form.Label> You will be charged the sum of</Form.Label> 
                       </InputGroup>
                        <InputGroup>
                        <br /> <br />
                       <Form.Label> {amount * currency.rating} FCFA from the number {tel}</Form.Label> 
                       </InputGroup>
                       </div> 

                    </Col>
                </Row>
            </Form>
            <p>Here we tranfer fund</p>
            {!processing ? <Button className="site-primary-color" onClick={submit}>Submit</Button> 
                : <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            }
        </div>
    )
}
export default TransferFund;