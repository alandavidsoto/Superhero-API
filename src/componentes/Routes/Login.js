import React,{useState,useContext, Fragment} from 'react'
import { useLocation,useHistory,Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Formik,Form,Field, ErrorMessage } from 'formik'
import http from '../../helper/http'
import { auth } from '../../App'

export const Login = ({setIsAuthenticaded}) => {
    const [invalid,setInvalid] = useState(false)
    const history = useHistory();
    const authenticaded = useContext(auth)
    return (
        <Fragment>
            <section className="login">
                <div className="card p-3">
                    <h1>LOGIN</h1>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={(values)=>{
                            let errors = {};
                            if (!values.email){
                                errors.email = "Por favor, introduzca un correo electronico"
                            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                                errors.email = 'Correo electronico invalido';
                            }
                            if (!values.password){
                                errors.password = "Introduzca una contraseña"
                            }
                            return errors;
                        }}
                        onSubmit={(values) => {
                            let url = 'http://challenge-react.alkemy.org/';
                            http(url,'post',values)
                            .then(res => {
                                setInvalid(false);
                                if(res.status == 200){
                                    authenticaded.setIsAuthenticaded(true)
                                    history.push('/home')
                                    localStorage.setItem('auth','true')
                                }
                                
                            })
                            .catch(() => setInvalid("Datos incorrectos"))
                          }}
                    >
                        {({ errors })=> (
    
                            <Form className="form-group">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <Field type="email" name="email" className="form-control" id="email" placeholder="name@example.com" />
                                    <ErrorMessage name="email" component={()=>(<div className="text-danger">{errors.email}</div>)}/>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="contraseña" className="form-label">Contraseña</label>
                                    <Field type="password" name="password" className="form-control" id="contraseña" placeholder="Introduce tu Contraseña" />
                                    <ErrorMessage name="password" component={()=> (<div className="text-danger">{errors.password}</div>)} />
                                </div>
    
                                <div className="mb-3">
                                    <button type="submit" className="form-control btn btn-success">Iniciar sesion</button>
                                    {(invalid) && <div className="text-danger text-center">Datos incorrectos</div>}
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </Fragment>
        
    )
}
