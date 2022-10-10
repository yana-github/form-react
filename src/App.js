import React from "react";
import styles from "./components/styles/formforUser.module.css";
import Notification from "./components/Notification";

class FormForUser extends React.Component {
  state = {
/*     name: "",
    surname: "",
    password: "",
    email: "", */
    showNotification: false,
  };
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }
  submitForm = (e) => {
e.preventDefault();
e.target.reset();
this.setState({showNotification: true})
  }
  render() {
    const { name, surname, password, email, showNotification } = this.state;

    return (
      <>
        <h4>Заполните контактную форму</h4>
        <form className={styles.form} onSubmit={this.submitForm}>
          <input 
          type="text" 
          name="name" 
          placeholder="Ваше имя"
          onChange={this.handleChange}
          />
           <input 
          type="text" 
          name="surname" 
          placeholder="Ваша фамилия"
          onChange={this.handleChange}
          />
           <input 
          type="password" 
          name="password" 
          placeholder="Ваш пароль"
          onChange={this.handleChange}
          />
           <input 
          type="email" 
          name="email" 
          placeholder="Ваш email"
          onChange={this.handleChange}
          />
        <button>Отправить данные</button>
        </form>
        <br />
        {showNotification && (
          <Notification name={name} surname={surname} password={password} email={email}/>
        )}
      </>
    );
  }
}

export default FormForUser;