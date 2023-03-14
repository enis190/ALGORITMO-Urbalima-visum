import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import validator from 'validator'
import { useNavigate } from "react-router-dom"


function CContacto() {

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
  })

  const [datosvalidacion, setDatosvalidacion] = useState({
    nombre: '* El Campo es requerido',
    apellido: '* El Campo es requerido',
    telefono: '* El Campo es requerido',
    email: '* El Campo es requerido',
  })



  const [sendestado, setSendestado] = useState(true);
  const [sendestadofinal, setSendestadofinal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [btncontactotxt, setBtncontactotxt] = useState("ENVIAR");

  const handleInputChange = (ev) => {
    // actualizando estado Campo
    setDatos({
      ...datos,
      [ev.target.name]: ev.target.value
    })

    // Validando campos
    {
      // ev.target.value === "" ? setDatosvalidacion({ ...datosvalidacion, [ev.target.name]: "* El Campo es requerido" }) : setDatosvalidacion({ ...datosvalidacion, [ev.target.name]: "" })
      if (ev.target.value == "") {
        setDatosvalidacion({ ...datosvalidacion, [ev.target.name]: "* El Campo es requerido" })

      } else {
        setDatosvalidacion({ ...datosvalidacion, [ev.target.name]: "" })

      }
    }

    //Validando email
    {
      var email = ev.target.value
      if (ev.target.name === 'email') {
        if (ev.target.value != '') {
          if (validator.isEmail(email)) {
            setDatosvalidacion({ ...datosvalidacion, [ev.target.name]: "" })
          } else {
            setDatosvalidacion({ ...datosvalidacion, [ev.target.name]: "* Email inválido" });
          }
        }

      }
    }
  }


  // Submit
  const navigate = useNavigate(); 
  const sendForm = (ev) => {
    ev.preventDefault();

    if (
      (datosvalidacion.nombre === "")
      && (datosvalidacion.apellido === "")
      && (datosvalidacion.telefono === "")
      && (datosvalidacion.email === "")
    ) {

      /**Si todo esta validado */
      setSendestado(true)

      /**Btn */
      setDisabled(true)
      setBtncontactotxt('Enviando...')

      navigate("/gracias");

    } else {
      setSendestado(false)
    }

  }


  return (
    <>
      <h2>Cotiza ahora</h2>
      <form onSubmit={(ev) => sendForm(ev)}>
        <div className="mb-3 mt-3">
          <input type="text" name='nombre' className={'form-control '} placeholder="Nombres*" onChange={handleInputChange}></input>
          {
            sendestado === false && <div className="form-text c-rpta text-danger">{datosvalidacion.nombre}</div>
          }
        </div>
        <div className="mb-3 mt-4">
          <input type="text" name='apellido' className="form-control" placeholder="Apellidos*" onChange={handleInputChange}></input>
          {
            sendestado === false && <div className="form-text c-rpta text-danger">{datosvalidacion.apellido}</div>
          }
        </div>
        <div className="mb-3 mt-4">
          <input type="text" name='telefono' className="form-control" placeholder="Celular*" onChange={handleInputChange}></input>
          {
            sendestado === false && <div className="form-text c-rpta text-danger">{datosvalidacion.telefono}</div>
          }
        </div>
        <div className="mb-3 mt-4">
          <input type="text" name='email' className="form-control" placeholder="Correo*" onChange={handleInputChange}></input>
          {
            sendestado === false && <div className="form-text c-rpta text-danger">{datosvalidacion.email}</div>
          }
        </div>
        <div className="mb-3 mt-4">
          <Form.Select aria-label="Default select example">
            <option value='' hidden>Estoy interesado en</option>
            <option value="1">1 dormitorio</option>
            <option value="2">2 dormitorios</option>
            <option value="3">3 dormitorios</option>
          </Form.Select>
        </div>
        <div className="mb-3 mt-4">
          <Form.Check
            type='checkbox'
            id='check'
            label='Acepto los términos y condiciones y protección de datos. '
          />
        </div>
        <div className="mt-4">
          <button type='submit' className='btn-submit'>{btncontactotxt}</button>
        </div>
      </form>
    </>
  )
}

export default CContacto