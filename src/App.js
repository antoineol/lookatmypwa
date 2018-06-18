import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasUpdate: undefined };
  }

  componentWillMount() {
    if (window.swObservable) {
      window.swObservable.subscribe(hasUpdate => this.setState({ hasUpdate }));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Bienvenue sur ma PWA</h1>
        </header>
        <p className="App-intro">
          Au premier chargement, vous serez notifié quand l'application sera mise en cache et prête à être installée.
          Android affiche la popup, mais l'installation reste possible sur iOS également.
        </p>
        <p className="App-intro">Lorsqu'une mise à jour est disponible, vous êtes également notifié qu'un rechargement
          utilisera la nouvelle version.</p>
        {this.state.hasUpdate !== undefined && (this.state.hasUpdate ? (
          <p className="sw-notification">Une mise à jour est disponible. Veuillez rafraîchir l'application.</p>
        ) : (
          <p className="sw-notification">L'application est maintenant en cache et prête à être utilisée hors ligne.</p>
        ))}
      </div>
    );
  }
}

export default App;
