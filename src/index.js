import React from "react";
import ReactDOM from "react-dom";

const Person = ({img,name,job,children}) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return (
        <article>
            <img 
                src={url}
                alt="person"
            />
            <h4>{name}</h4>
            <h4>{job}</h4>
        </article>
    )
}



const PersonList = () => {
    return (
        <section>
            <Person img="34" name="john" job="developer"/>
            <Person img="24" name="bob" job="doctor"/>
            <Person img="44" name="david" job="lawyer"/>
        </section>
    )
}

ReactDOM.render(<PersonList />, document.getElementById("root"));