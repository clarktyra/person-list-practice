import React from "react";
import ReactDOM from "react-dom";
import './index.css'

const Person = ({img,name,job,children}) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return (
        <article className="person">
            <img src={url}alt="person"/>
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    )
}



const PersonList = () => {
    return (
        <section className="person-list">
            <Person img="34" name="john" job="developer"/>
            <Person img="24" name="bob" job="doctor">
            <p>Lorem20 Lorem20 Lorem20 Lorem2 0Lorem20 Lorem20 Lorem20 Lorem20 Lorem20 Lorem20</p>
            </Person>
            <Person img="44" name="david" job="lawyer"/>
        </section>
    )
}

ReactDOM.render(<PersonList />, document.getElementById("root"));