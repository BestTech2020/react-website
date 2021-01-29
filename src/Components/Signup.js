import React, { useRef } from "react";
import "./Signup.css";
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";


function Signup(){
    const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => console.log(data);
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async data => {
        alert(JSON.stringify(data));
     };
    console.log(watch("example")); // watch input value by passing the name of it
  
    return(
        <div className=" ">
            
            <section className="mt-5 mb-5  text-center form2">
            <h1>Kindly Sign-Up Here</h1>
            <Form inline className="bg-light p-5 mx-auto rounded shadow-lg" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasic">
                    <Form.Control type="text" placeholder="Enter FirstName"  
                    className="mx-sm-3 mb-2 form3" name="firstName" ref={register({ required: true, minLength: 5 })} />
                    {errors.firstName && "Required(Must be 5-20 characters)"}
                </Form.Group>

                <Form.Group controlId='formBasicName'>
                    <Form.Control type="text" placeholder='Enter LastName'  
                    className="mx-sm-3 mb-2 form3" name="lastName" ref={register({ required: true, maxLength: 20 })} />
                    {errors.lastName && "Required(Maximum of 20 characters)"}
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="number" placeholder="Enter Age" 
                     className="mx-sm-3 mb-2 form3"  name="age" ref={register({ required:true, min: 18, max: 99 })}/>
                    {errors.age && "Must be from 18-99 "}
                </Form.Group>

                
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="temail" name="temail" placeholder="Enter email" 
                     className="mx-sm-3 mb-2 form3"  ref={register({required:true, pattern: /\S+@\S+\.\S+/ })}/>
                    {errors.temail && "Must be from a valid email"}
                </Form.Group>

                <Form.Group>
                    <Form.Control
                    name="password"
                    placeholder="Enter Password"
                            type="password"
                            ref={register({
                              required: "You must specify a password",
                              minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                              }
                            })}
                    className="mx-sm-3 mb-2 form3"
                   
                    />
                     {/* {errors.pwd && " Must be minimum of 8 characters"} */}
                     {errors.password && errors.password.message}
                     
                </Form.Group>
                <Form.Group>
                    <Form.Control
                    className="mx-sm-3 mb-2 form3"
                    placeholder="Confirm Password"
                    name="password_repeat"
                    type="password"
                    ref={register({
                      validate: value =>
                        value === password.current || "The passwords do not match"
                    })}
                    />
                      {errors.password_repeat && errors.password_repeat.message}
                </Form.Group>  
                             
                <Form.Group controlId="formBasicCheckbox" >
                <Form.Check type="checkbox" label="I Agree to Terms"  className="mx-sm-3 mb-4 ml-5"/>
                </Form.Group>

                <Button variant="outline-primary" type="submit" className="mx-sm-3 mb-2 form3 bg-danger">Register</Button>{' '}
            </Form>
            </section>
        </div>
    );
}
export default Signup;