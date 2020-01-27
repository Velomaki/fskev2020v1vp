import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
      <div>
          <h1> {props.name} </h1>
      </div>
  )
}

const Content = (props) => {
  return (
      <div>
            <Part osio={props.part1} exs={props.exercises1} />
            <Part osio={props.part2} exs={props.exercises2} />
            <Part osio={props.part3} exs={props.exercises3} />
      </div>
  )
}

const Total = (props) => {
  //console.log(props.exs)
  return (
      <div>
      <p> yhteensä {props.exercises1+props.exercises2+props.exercises3} tehtävää </p>
      </div>
  )
}

const Part = (props) => {
  return (
  <div>
      <p> {props.osio} {props.exs} </p>
  </div>
  )
}


const App = () => {
  const kurssi = {
    nimi: 'Half Stack app development',
    osat: [
      {
        nimi: 'Fundamentals of React',
        tehtavia: 10
      },
      {
        nimi: 'Using Props to pass data',
        tehtavia: 7
      },
      {
        nimi: 'State of a Component',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Header  name={kurssi.nimi} />
      <Content part1={kurssi.osat[0].nimi} exercises1={kurssi.osat[0].tehtavia}
            part2={kurssi.osat[1].nimi} exercises2={kurssi.osat[1].tehtavia}
            part3={kurssi.osat[2].nimi} exercises3={kurssi.osat[2].tehtavia}/>
      <Total yht1={kurssi.osat[0].tehtavia} 
            yht2={kurssi.osat[1].tehtavia}
            yht3={kurssi.osat[2].tehtavia} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
