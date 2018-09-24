import React, { Component } from "react";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Jumbo from "./components/Jumbo/Jumbo";
import Nav from "./components/Nav/Nav";
import images from "./images.json";

let guessesArr = [];

class App extends Component {
  // SETTING STATE
  state = {
    images,
    score: 0,
    topScore: 0,
    clicked: guessesArr,
  };

  handleClick = id => {
    console.log(id);
    this.updateScore(id)
    this.shuffleCards(images)
  }

  updateScore = guess => {
    let score = this.state.score;
    let topScore = this.state.topScore;
    // INCREASE SCORE
    if (!guessesArr.includes(guess)) {
      guessesArr.push(guess);
      score++
      if (score >= topScore) {
        topScore = score;
      }

      console.log('guessesArr', guessesArr);
      console.log('score', score);
      console.log('topscore', topScore);

      // WIN
      if (guessesArr.length === images.length) {
        alert("YOU WIN!!!");
        score = 0;
        guessesArr = [];
      };
      // UPDATE SCORE STATE
      this.setState({
        score: score,
        topScore: topScore,
        clicked: guessesArr
      });

      // USER CLICKED THE SAME IMAGE - INCORRECT
    } else {
      alert("You lost :( Try again!!!");
      guessesArr = [];
      // UPDATE SCORE STATE
      this.setState({
        score: 0,
        topScore: this.state.topScore,
        clicked: guessesArr
      });
    };
  }

  // SHUFFLE IMAGES
  shuffleCards = images => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return this.setState({ images })
  };

  // RENDER CARD COMPONENT FOR EACH IMAGE
  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Jumbo></Jumbo>
        <Wrapper>
          {this.state.images.map(friend => (
            <Card
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
