
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { UserContext } from "../context/UserContext";


export function Login() {

    const navigate = useNavigate()
    const ctx = useContext(UserContext)
    const {loginUser, response} = ctx

    const[user, setUser] = useState() 
    const[email, setEmail] = useState('')
    const[emailErr, setEmailErr] = useState('')
    const[emailValid, setEmailValid] = useState(false)
    const[password, setPassword] = useState('')
    const[passwordErr, setPasswordErr] = useState('')
    const[passwordValid, setPasswordValid] = useState(false)

    const [formErr, setFormErr] = useState('')
    const [formValid, setFormValid] = useState('')

    
    function updateEmail(e) {
        setEmail(e.target.value)
    }
   
    function updatePassword(e) {
        setPassword(e.target.value)
    }


    useEffect(() => {
        setUser({
            email: email,
            password: password
        })

    },[email, password])
    
    const symbList4 ='`~!#$%^&*()_+=[]{}|-":;?/><,\''
    
    const pwdFilter = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,50}$/gmu
    const emailFilter = /^\S+@\S+\.\S+$/
    
    function handleSubmit (e) {
        e.preventDefault()  

      //validacijos pradzia 

       
        if(!email || !emailFilter.test(email)){
            setEmailErr(`field can't be empty`)
            setEmailValid(false)
            return
        }else{
            setEmailErr(false)
            setEmailValid(true)
        }

        for (const i of symbList4){
            for(const j of email){
                if(i === j){                    
                   return setEmailErr(`can't use symbols`)                    
                }
            }
        }      
        
        if(!password || password.length < 8|| !pwdFilter.test(password)){
            setPasswordErr(`The password must consist of one lowercase letter, one uppercase letter, one symbol and one number.`)
            setPasswordValid(false)
            return
        }else{
            setPasswordErr(false)
            setPasswordValid(true)
        }
             
        //validacijos pabaiga  


        loginUser(user)   
        console.log('login response...', response)
          
        // if(response.status === 'ok'){
        //     setFormValid(response.msg)
        //     setFormErr('')                 
        // }

              
        // if(response.status === 'err'){
        //     setFormErr(response.msg)
        //     setFormValid('')
        // }     
}

    return (        
        <Container className="">
            <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className='formCenter' >Login</h2>


          {formValid && (<div className="ms-5 me-5 alert alert-success " role="alert">
        <h4 className="alert-heading">Well done!</h4> 
         <p className="mb-0">{formValid}</p>
          </div>)}

          {formErr && (<div className="ms-5 me-5 alert alert-danger " role="alert">
        <h4 className="alert-heading">Error message</h4> 
         <p className="mb-0">{formErr}</p>
          </div>)}
             
        <form onSubmit={handleSubmit} action="">           
            <Form.Group className="mb-2">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">Email:</Form.Label>
                <Form.Control onChange={updateEmail}  type="email" className={`form-control ${emailValid ? 'is-valid': ''} ${emailErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <div className="invalid-feedback">
                  {emailErr}
                </div>
                </Form.Group>
           
            <Form.Group className="mb-2">
                <Form.Label className="fs-4" id="inputGroup-sizing-default">Password:    </Form.Label>
                <Form.Control onChange={updatePassword}  type="password" className={`form-control ${passwordValid ? 'is-valid': ''} ${passwordErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <div className="invalid-feedback">
                  {passwordErr}
                </div>
                </Form.Group>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-primary " type="submit">Submit</button>
            </div>
        </form>
        </Col>
      </Row>
        </Container>
    )
}