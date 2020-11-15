import React from 'react';
import logo from './freezelogo.png';
import santa from './fc2.png';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import {Modal, Row,Col,Container} from 'react-bootstrap'

const config = [
  {day:15, title:"Bee 52", imageUrl:"https://freeze64.files.wordpress.com/2017/11/freeze64-issue-15-cover2.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=bee+52&Go.x=0&Go.y=0", developer: "Codemasters", year: "1992", buyUrl:"https://freeze64.wordpress.com/freeze64-issue-15/"},
  {day:19, title:"Roland’s Ratrace", imageUrl:"https://freeze64.files.wordpress.com/2018/05/cover-issue-193.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=Roland%27s+Ratrace&Go.x=0&Go.y=0", developer: "Ocean", year: "1985", buyUrl:"https://freeze64.wordpress.com/freeze64-issue-19/"},
  {day:3, title:"Ghosts'n Goblins", imageUrl:"https://freeze64.files.wordpress.com/2017/05/issue3cover.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=ghost+n+goblins&Go.x=12&Go.y=6", developer: "Elite Systems", year: "1986", developer: "Elite Systems", year: "1986", buyUrl:"https://freeze64.com/freeze64-issue-3/"},
  {day:22, title:"Split Personalities", imageUrl:"https://freeze64.files.wordpress.com/2018/10/cover-issue-22.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=+%09+Split+Personalities&Go.x=0&Go.y=0", developer: "Domark", year: "1986", buyUrl:"https://freeze64.wordpress.com/freeze64-issue-22/"},
  {day:6, title:"Phantom of the Asteroid", imageUrl:"https://freeze64.files.wordpress.com/2017/05/freeze64-cover-6.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=Phantom+of+the+Asteroid&Go.x=0&Go.y=0", developer: "Mastertronic", year: "1986", buyUrl:"https://freeze64.com/freeze64-issue-6/"},
  {day:13, title:"Thing on a Spring", imageUrl:"https://freeze64.files.wordpress.com/2017/08/freeze64-cover-131.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=thing+on+a+spring&Go.x=0&Go.y=0", developer: "Gremlin Graphics", year: "1985", buyUrl:"https://freeze64.com/freeze64-issue-13/"},
  {day:2, title:"Bruce Lee", imageUrl:"https://freeze64.files.wordpress.com/2017/05/issue2cover.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=bruce+lee&Go.x=13&Go.y=4", developer: "Datasoft", year: "1984", buyUrl:"https://freeze64.com/freeze64-issue-2/"},
  {day:17, title:"Hero of the Golden Talisman", imageUrl:"https://freeze64.files.wordpress.com/2018/03/cover-issue-171.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=Hero+of+the+Golden+Talisman&Go.x=0&Go.y=0", developer: "MAD", year: "1985", buyUrl:"https://freeze64.wordpress.com/freeze64-issue-17/"},
  {day:8, title:"Maze of the Mummy", imageUrl:"https://freeze64.files.wordpress.com/2017/07/freeze64-cover-8-2.png", downloadUrl:"https://psytronik.itch.io/maze-of-the-mummy-c64", developer: "Psytronik Software", year: "2015", buyUrl:"https://freeze64.com/freeze64-issue-8/"},
  {day:10, title:"Mayhem in Monsterland", imageUrl:"https://freeze64.files.wordpress.com/2017/05/freeze64-cover-10.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=mayhem+in+monsterland&Go.x=0&Go.y=0", developer: "Apex Computer Productions", year: "1993", buyUrl:"https://freeze64.com/freeze64-issue-10/", blurb:"To celebrate our first birthday and also the 10th issue of FREEZE64, we recommend you spend the day playing one of our all time favourite Commodore 64 games, Mayhem in Monsterland by Apex from 1993. The perfect C64 arcade platformer. Read issue 10 <a href=\"http://freeze64.com/freeze64-issue-10/\" target=\"_new\">here</a>"},
  {day:20, title:"Bounder", imageUrl:"https://freeze64.files.wordpress.com/2018/06/freeze64-cover-issue-20.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=Bounder&Go.x=0&Go.y=0", developer: "Gremlin Graphics", year: "1985", buyUrl:"https://freeze64.wordpress.com/freeze64-issue-20/"},
  {day:11, title:"Gribbly’s Day Out", imageUrl:"https://freeze64.files.wordpress.com/2017/05/freeze64-cover-11.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=gribbly%27s+day+out&Go.x=0&Go.y=0", developer: "Hewson Consultants", year: "1985", buyUrl:"https://freeze64.com/freeze64-issue-11/"},
  {day:25, title:"Santa’s Xmas Caper", imageUrl:"./25.jpg", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=Santa%27s+Christmas+Caper&Go.x=0&Go.y=0", developer: "Zeppelin Games", year: "1990", buyUrl:"", blurb:"Merry Christmas!"},
  {day:7, title:"Wizball", imageUrl:"https://freeze64.files.wordpress.com/2017/05/freeze64-cover-7.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=wizball&Go.x=0&Go.y=0", developer: "Ocean", year: "1987", buyUrl:"https://freeze64.com/freeze64-issue-7/"},
  {day:1, title:"Monty on the Run", imageUrl:"https://freeze64.files.wordpress.com/2017/05/cover1-1.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=monty+on+the+run&Go.x=5&Go.y=11", developer: "Gremlin Graphics", year: "1985", buyUrl:"https://freeze64.com/freeze64-issue-1/"},
  {day:24, title:"Stuntman Seymour", imageUrl:"https://freeze64.files.wordpress.com/2018/11/cover-issue-24.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=+%09+Stuntman+Seymour&Go.x=0&Go.y=0", developer: "Codemasters", year: "1992", buyUrl:"https://freeze64.wordpress.com/freeze64-issue-24/"},
  {day:14, title:"Cosmic Cruiser", imageUrl:"https://freeze64.files.wordpress.com/2017/10/freeze64-cover-14.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=cosmic+cruiser&Go.x=0&Go.y=0", developer: "Imagine", year: "1984", buyUrl:"https://freeze64.com/freeze64-issue-14/"},
  {day:5, title:"Hunchback", imageUrl:"https://freeze64.files.wordpress.com/2017/05/freeze64-cover-5-3.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=hunchback&Go.x=0&Go.y=0", developer: "Ocean", year: "1983", buyUrl:"https://freeze64.com/freeze64-issue-5/"},
  {day:18, title:"Park Patrol", imageUrl:"https://freeze64.files.wordpress.com/2018/04/animation-issue18.gif", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=Park+Patrol&Go.x=0&Go.y=0", developer: "Activision", year: "1984", buyUrl:"https://freeze64.wordpress.com/freeze64-issue-18/"},
  {day:16, title:"Boulder Dash", imageUrl:"https://freeze64.files.wordpress.com/2017/11/freeze64-cover-issue-16.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=boulderdash&Go.x=0&Go.y=0", developer: "First Star Software", year: "1984", buyUrl:"https://freeze64.wordpress.com/freeze64-issue-16/"},
  {day:9, title:"Treasure Island Dizzy", imageUrl:"https://freeze64.files.wordpress.com/2017/05/freeze64-cover-9.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=treasure+island+dizzy&Go.x=0&Go.y=0", developer: "Codemasters", year: "1989", buyUrl:"https://freeze64.com/freeze64-issue-9/"},
  {day:21, title:"Clean Up Time", imageUrl:"https://freeze64.files.wordpress.com/2018/08/cover-issue-21.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=Clean+Up+Time&Go.x=0&Go.y=0", developer: "Players Software", year: "1986", buyUrl:"https://freeze64.wordpress.com/freeze64-issue-21/"},
  {day:4, title:"The Bear Essentials", imageUrl:"https://freeze64.files.wordpress.com/2017/10/issue4cover.png", downloadUrl:"https://axtevision.itch.io/the-bear-essentials", developer: "Pond Software", year: "2016", buyUrl:"https://freeze64.com/freeze64-issue-4/"},
  {day:23, title:"Bombo", imageUrl:"https://freeze64.files.wordpress.com/2018/10/cover-issue-231.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=Bombo&Go.x=0&Go.y=0", developer: "Rino Marketing Ltd", year: "1986", buyUrl:"https://freeze64.wordpress.com/freeze64-issue-23/"},
  {day:12, title:"Way of the Exploding Fist", imageUrl:"https://freeze64.files.wordpress.com/2017/05/freeze64-cover-12.png", downloadUrl:"https://csdb.dk/search/?seinsel=releases&search=way+of+the+exploding+fist&Go.x=0&Go.y=0", developer: "Melbourne House", year: "1985", buyUrl:"https://freeze64.com/freeze64-issue-12/"},
]

// See which doors have already been opened
const storage = window.localStorage;
const openedDayStorage = storage.getItem('advent.openedDays');
let openedDays = [];
if(openedDayStorage) {
  openedDays = openedDayStorage.split(',');  
}

for(let door of config) {
  if (checkDay(door.day) && openedDays.find(d => d == door.day)) {
    door.open = true;
  }

  if(!door.blurb) {
    door.blurb = `Today’s FREEZE64 advent selection is ${door.title} by ${door.developer} from ${door.year}. Read about the game in FREEZE64 issue ${door.day} <a href="${door.buyUrl}" target="_new">here <NewWindow/></a>`
  }
}

const Doors = styled.div`
  margin:0px;
  padding:0px;
`

const ClosedDoor = styled.div`
 background-color:red;
 border: solid 1px black;
 box-sizing: border-box;
 width:100%;
 padding-top: 141%;
 display:flex;
 h1 {
  position:absolute;
  color: white;
  text-align:center;
  width:100%;
  top:calc(50% - 5vw);
  font-size:7vw;
  left:0;
 }
`

const OpenDoor = styled.div`
  width:100%;
  border: solid 1px black;
  box-sizing: border-box;
  padding-top: 141%;
  display:flex;
  background-image:url('${props => props.imageUrl}');
  background-size:cover;
`

const ModalImage = styled.div`
  width:100%;
  padding: 10px;
  overflow: hidden;

  img {
    width:100%;
  }
`

function checkDay(day)
{
  if(storage.getItem("cheatmode")) {
    return true;
  }
  const doorDate = new Date(2020, 11, day);
   return doorDate <= new Date();
}

class DoorList extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      doors: props.doors,
      showModal: props.showModal
    }
  }

  render() {
    const cols = [0,1,2,3,4]
    const rows = [0,1,2,3,4]

    return (
      <Container style={{maxWidth:640}}>
        {rows.map((_,row) => (
          <Row noGutters>
            {cols.map((__, col) => {
              let i = row * 5 + col
              let d = this.state.doors[i]
              return (
                <Col key={`row${row}-col${col}`}>
                  <Door key={d.day} door={d} showModal={this.state.showModal} />
                </Col>
              )
            })}
          </Row>
        ))}
      </Container>
    )
  }
};

class Door extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     door: props.door,
     open: props.door.open,
    }
    this.showModal = props.showModal;
  }

  showModalWrapper() {
    console.log(this.state.door);
    this.showModal(this.state.door);
  }

 openDoor() {
   const day = this.state.door.day;
   if (checkDay(day)) {
    openedDays.push(day);
    storage.setItem('advent.openedDays', openedDays.join(','));

    this.setState({
      open: true
    });

    this.showModalWrapper();
  } else {
    alert(`Patience my young padawan, you cannot open that door until day ${day}.`);
  }
 }
 
 render() {
  if (this.state.open) return (
    <OpenDoor imageUrl={this.state.door.imageUrl} onClick={() => this.showModalWrapper()}>
      <div/>
    </OpenDoor>
  )

  return (
    <ClosedDoor onClick={() => this.openDoor()}>
      <h1><ChristmasText text={this.state.door.day}/></h1>
    </ClosedDoor>
  )
 }
}

function NewWindow() {
  return (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
  )
}

const TopH1 = styled.h1`
 position:relative;
 font-family: 'Mountains of Christmas', cursive;
 display:block;
`

const TopImage = styled.img`
 width:80%;
 display:block;
 margin:auto;
`

function ChristmasText(props) {
  let parts = String(props.text).split("").map(function(v, i) {
    return (<span class={i % 2 == 0 ? "christmas-gold" : "christmas-blue"}>{v}</span>);
  })
  return (
    <span>{parts}</span>
  );
};

function Header(props) {
  return (
    <Container centered>
      <Row style={{alignItems: 'center'}}>
        <Col sm={true}><TopImage src={logo} alt="Logo" /></Col>
        <Col sm={true}><TopH1><ChristmasText text="Advent 2020"/></TopH1></Col>
      </Row>
    </Container>);
}

function Footer(props) {
  return (
    <div class="footer">
      <img src={santa} alt="santa"/>
    </div>
  )
}

function App() {
  const [show, setShow] = React.useState(false);
  const [showWelcome, setShowWelcome] = React.useState(false);
  const [door, setDoor] = React.useState();

  React.useEffect(() => {
    if (!storage.getItem('seenWelcome')) {
      storage.setItem('seenWelcome', 1);
      setShowWelcome(true);
    }
  });

  return (
    <div className="App">
      <Header/>
      <DoorList doors={config} showModal={(d) => {setDoor(d); setShow(true)}} />
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        backdrop="static"
        size="lg"
        >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {door && `Day ${door.day} - ${door.title}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container fluid>
            <Row>
              <Col xs={18} md={4}>
                <ModalImage>
                  <img src ={door && door.imageUrl}/>
                </ModalImage>
              </Col>
              <Col>
              {door && (
                <>
                  <p dangerouslySetInnerHTML={{__html: door.blurb}} />
                  <p>
                    Don't forget to pop onto Twitter or Facebook and share your gameplay videos and photos with the FREEZE64 community. Remember to tag #FREEZE64 and 
                    @FREEZE64UK and we’ll make sure that we share them with our many followers. Enjoy!
                  </p>
                  <p>
                    <a href={door.downloadUrl}>Find it on csdb <NewWindow/></a>
                  </p>
                </>
              )}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <Modal
        show={showWelcome}
        onHide={() => setShowWelcome(false)}
        dialogClassName="modal-90w"
        aria-labelledby="welcome"
        centered
        backdrop="static"
        size="lg"
        >
        <Modal.Header closeButton>
          <Modal.Title>
            FREEZE64 2020 Advent Calendar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <p>
        Greetings FREEZE64 Readers! Welcome to the FREEZE64 advent calendar.
          </p>
          <p>
            Each day during December 2020 you will be able to open the corresponding advent door to reveal a past issue of FREEZE64, and we’ll also recommend a Commodore 64 game for you to play. Load up the recommended game in your C64 and then pop on to Twitter or Facebook and share your gameplay videos and photos with the FREEZE64 community - remember to tag #FREEZE64 and 
@FREEZE64UK and we’ll make sure that we share them with our many followers.
          </p>
          <p>
            Enjoy the selection, have fun playing the games, and Merry Christmas from FREEZE64.
          </p>
        </Modal.Body>
      </Modal>
      <Footer/>
    </div>
  );
}

export default App;
