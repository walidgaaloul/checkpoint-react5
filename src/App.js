import React from "react"
import './App.css';
class App extends React.Component {
   
  state = {
    Person: {
      fullName: "Walid Gaaloul",
      bio: "i'm a web devlopper and now i'm student in GO MYCODE",
      imgSrc: "Sans titre-1.jpg",
      profession: "Web devlopper",

    },
    show: false,
    count: 0
  };
  incrementCounter = () => {
    this.setState({
      count:this.state.count + 1
    });
  };
  

  componentDidMount = () => {
    setInterval(this.incrementCounter , 1000);
    
  }
  componentDidUpdate = () => {
   
  }

  ShowPerson = () => {

    this.setState({
      ...this.state,
      show: !this.state.show,
      count: this.state.count + 1
    });
  };


  render() {
    return (
      <div className="App">

        {this.state.show && (

          <div className="card">
            <div className="box">
              <div className="show">
                <img src={this.state.Person.imgSrc} alt="profile" />
                <div className="title">
                  {this.state.Person.fullName}<br/>
                  <span>{this.state.Person.profession}</span><br />
                  <div className="text">
                  {this.state.Person.bio}<br />
                  </div>
                  <button onClick={this.ShowPerson} id="buttonStyle">show</button>
                  <br />
                  TIME {this.state.count}<br />
                </div>
              </div>
            </div>
          </div>

        ) || <div>
            <button onClick={this.ShowPerson} id="buttonStyle">Show-Me</button><br />
                  TIME {this.state.count}<br />
          </div>}

       

      </div>
    );
  }
}
    

export default App;
