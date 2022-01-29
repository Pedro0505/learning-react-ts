import React, { Component } from 'react';

interface responseApiDog {
  message: string, 
  status: string 
}

interface MyState {
  dogImg: responseApiDog
}

class DogApi extends Component<{}, MyState> {

  state = {
    dogImg: { message: '', status: '' }
  }

  componentDidMount() {
    console.log(this)
    this.fetchApi();
  }

  fetchApi = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((dog) => this.setState({ dogImg: dog }))
  }

  render() {
    const { dogImg } = this.state;
    return (
      <div>
        <button type="button" onClick={ this.fetchApi }>Clique Aqui</button>
        <img
          width="250px"
          height="250px"
          src={ dogImg.message }
          alt="Imagem de um Cachorro"
        />
      </div>
    );
  }
}

export default DogApi;
