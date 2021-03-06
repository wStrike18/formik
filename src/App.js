import { Formik, Form } from "formik";
import CheckBox from "./checkBokx";
import Radio from "./Radio";
import Select from "./Select";
import TextInput from './TextInput' //importamos nuestro custom hook

const validate = (values) => {
  //este recibe los valores del formulario
  const errors = {}; //estos errores seran los que yo valla agregando en cada input

  //si el valor de name es vacío despues de haber tocado el campo (focus on)
  //entonces nos dira que este campo es requerido.
  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }

  if (values.rol === '0') {
    errors.rol = "Requerido";
  } 
  if ( values.radio === '') {
    errors.radio = "Requerido";
  } 


  return errors; //retorno mis errores
};

function App() {
  return (
    <Formik
      initialValues={{ name: "", lastname: "", email: "", rol:"0", radio:""}}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <Form>
            {/** aqui hacemos uso de nuesto custoom component y le pasamos las propiedades */}
           <TextInput name="name" label="Name" />
          <br />
          <TextInput name="lastname" label="Last Name" />
          <br />
          <TextInput name="email" type="email" label="Email Name" />
          <br />

          <Select label="Roles" name="rol">
            <option value='0'>Selecciones un rol</option>
            <option value='1'>ADMIN</option>
            <option value='2'>USER</option>
          </Select>

         <CheckBox  
            name = "acepto"
         >
         Aceptar terminos y condiciones
         </CheckBox>
         <Radio name="radio" value="1"  label="valor1"/>
         <Radio name="radio" value="2" label="valor2" />
         <Radio name="radio" value="3" label="valor3" />
          <button type="submit">Enviar</button>
          

        </Form>

      )}
    </Formik>
  );
}

export default App;
