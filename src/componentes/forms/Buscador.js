import React, { Fragment } from 'react'
import { Formik,Form,Field, ErrorMessage } from 'formik'
import http from '../../helper/http'
export const Buscador = ({handlerFetch}) => {
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
                        http(url,'get')
                        .then(res=> (res.status == 200) && handlerFetch(res.data.results))
                        .catch(err => console.log(err))
                    }
                }
            >
                {({errors})=>(
                    <Fragment>
                        <Form className="formulario col-lg-5">
                            <Field  name="search" className="form-control" type="text" placeholder="Ingrese un superheroe..."/>
                            <button className="btn btn-danger" type="submit">Buscar</button>
                        </Form>
                        <ErrorMessage name="search" component={()=> (<div className="error text-danger">{errors.search}</div>)}/>
                    </Fragment>
                    
                    
                )}
            </Formik>
        </Fragment>
    )
}
