import '../styles/components/pages/contactoPage.css';
import React, {useState} from 'react';
import axios from 'axios';


const contactoPage = (props) => {

    const initialForm={
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }
    const [sending, setSending]=useState(false);
    const [msg,setMsg]=useState('');
    const [formData, setFormData]=useState(initialForm);

    const handleChange=e=>{
        const{name,value}=e.target;
        setFormData(oldData=>({
            oldData,
            [name]:value
        }))
    }
    const handleSubmit=async e=>{
        e.preventDefault();
        SetMsg('');
        setSending(true)
        const response=await
        axios.post('http://localhost:3000/api/contacto',formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }
    return (
        <main className='holder'>
            <div className='columna contacto'>
                <h2>Complete el siguiente formulario</h2>
                <form action='/contacto' method='post' className='formulario' onSubmit={onSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type='text' name='nombre' value={formData.nombre}
                        onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type='text' name='email' value={formData.email}
                        onChange={handleChange} />
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type='text' name='teléfono' value={formData.teléfono}
                        onChange={handleChange} />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name='mensaje'value={formData.mensaje}
                        onChange={handleChange} ></textarea>

                    </p>
                    <p className='centrar'><input type='submit'
                        value='enviar' />
                    </p>

                </form>
                {sending ? <p>Enviando...</p>:null}
                {msg ? <p>{msg}</p>:null}
            </div>
            <div className='columna datos'>
                <h2>Otras vias de contacto</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Teléfono:123456</li>
                    <li>Email</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </main>

    );
}
export default contactoPage;