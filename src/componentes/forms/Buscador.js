import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { axios_hero_action } from '../../redux/action'
import { Formik,Form,Field, ErrorMessage } from 'formik'


export const Buscador = () => {
    const dispatch = useDispatch()
    return (
        <Fragment>
            <Formik 
                initialValues={{search: ""}}
                validate={(values)=> {
                    const errors = {};
                    if (values.search == ""){
                        errors.search = "No puedes dejar este campo vacio"
                    } else if (/[\W\d]/.test(values.search)){
                        errors.search = "No puede contener numeros y simbolos, solo caracteres de tipo alfabeticos"
                    }
                    return errors
                }}
                onSubmit={
                    (values)=> {
                        let url = `https://www.superheroapi.com/api.php/3009719749316257/search/${values.search}`;
                        dispatch(axios_hero_action(url))
                    }
                }
            >
                {({errors})=>(
                    <div className="buscador row justify-content-center p-3" style={{marginLeft: "0px",marginRight: "0px"}}>
                        <h2 className="text-center">BUSCA A TU INTEGRANTE</h2>
                        <Form className="formulario col-lg-5">
                            <Field  name="search" className="form-control" type="text" placeholder="Ingrese un superheroe..."/>
                            <button className="btn btn-warning" type="submit">Buscar</button>
                        </Form>
                        <ErrorMessage name="search" component={()=> (<div className="error text-danger">{errors.search}</div>)}/>
                    </div>
                    
                    
                )}
            </Formik>
        </Fragment>
    )
}
