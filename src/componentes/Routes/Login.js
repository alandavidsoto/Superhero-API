import React, { useState, useContext, Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { authentication_action, axios_auth_action } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";

export const Login = () => {
  const isAuthenticaded = useSelector(
    (state) => state.auth_reducer.isAuthenticaded
  );

  const [invalid, setInvalid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    isAuthenticaded == false && setInvalid("Datos incorrectos");
  }, [isAuthenticaded]);

  return (
    <Fragment>
      <section className="login">
        <div className="card p-3">
          <h1>LOGIN</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              let errors = {};
              if (!values.email) {
                errors.email = "Por favor, introduzca un correo electronico";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Correo electronico invalido";
              }
              if (!values.password) {
                errors.password = "Introduzca una contraseña";
              }
              return errors;
            }}
            onSubmit={(values) => {
              dispatch(
                axios_auth_action("http://challenge-react.alkemy.org/", values)
              );
            }}
          >
            {({ errors }) => (
              <Form className="form-group">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contraseña" className="form-label">
                    Contraseña
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    id="contraseña"
                    placeholder="Introduce tu Contraseña"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="text-danger">{errors.password}</div>
                    )}
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="form-control btn btn-success"
                  >
                    Iniciar sesion
                  </button>
                  {invalid && (
                    <div className="text-danger text-center">
                      Datos incorrectos
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <button
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            padding: "5px",
            border: "none",
            borderRadius: "5px",
            color: "#333",
          }}
          onClick={() => dispatch(authentication_action(true))}
        >
          Ingresar como invitado
        </button>
      </section>
    </Fragment>
  );
};
