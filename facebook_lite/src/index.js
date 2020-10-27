import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jeanne from './jeanne.png';
import Martine from './martine.png';
import Claude from './claude.png';

{/*On détermine les 3 profils*/}

	const couleur = [
		'#EDBB99',
		'#F5CBA7',
		'#F9E79F',
		'#ABEBC6',
		'#AED6F1',
		'#D2B4DE',
		'#E6B0AA'
	];

const profils = [
{

prenom : 'Jeanne',
nom : 'J',
naissance : '28/02/1990',
publi : 'Reprise après une semaine de vacances'
},

{

prenom : 'Martine',
nom : 'M',
naissance : '05/06/1981',
publi : 'Soirée ciné - restau'
},

{

prenom : 'Claude',
nom : 'C',
naissance : '11/12/1998',
publi : 'Séance de sport terminée'
}];



{/*La classe Infos affiche le header avec les 3 boutons, le container pour la fiche info
	la fonction pour afficher les infos en fonction de l'event onClick*/}
class Infos extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			profile: profils[0],
			color: couleur[0]
		}
		this.GetProfils = this.GetProfils.bind(this);
		this.ChangeCouleur = this.ChangeCouleur.bind(this);
	}

	GetProfils=(props)=>{
		this.setState ({
			profile:props
		})
	}

	/* Changement de style - le code provient de : https://codepen.io/GloriaDing/pen/WzYKLJ?editors=0010 */
	ChangeCouleur(props){

    const code = '0123456789ABCDEF';
    let nouvCoul = '#';
    for (let i = 0; i < 6; i++) {
      nouvCoul += code[Math.floor(Math.random() * 16)];
    }

    this.setState({ color: nouvCoul });
	}

	render() {

	return (
		<>
		<header>
			<button className="bouton1" onClick={()=> this.GetProfils(profils[0])}> Jeanne </button>
			<button className="bouton2" onClick={()=> this.GetProfils(profils[1])}> Martine </button>
			<button className="bouton3" onClick={()=>  this.GetProfils(profils[2])}> Claude </button>
		</header>
		<div className="container" style={{background : this.state.color}}>
			<div>
			{
				this.state.profile===profils[0] && 
				<div>
					<div className="Photo">
						<img src={Jeanne} alt='jeanne' />
					</div>
					<div className="Prenom">
						<p>Prénom : {profils[0].prenom}</p>
					</div>
					<div className="Nom">
						<p>Nom : {profils[0].nom}</p>
					</div>
					<div className="Naissance">
						<p>Date de naissance : {profils[0].naissance}</p>
					</div>
				</div>
			}
			{
				this.state.profile=== profils[1] && 
				<div>
					<div className="Photo">
						<img src={Martine} alt='martine' />
					</div>
					<div className="Prenom">
						<p>Prénom : {profils[1].prenom}</p>
					</div>
					<div className="Nom">
						<p>Nom : {profils[1].nom}</p>
					</div>
					<div className="Naissance">
						<p>Date de naissance : {profils[1].naissance}</p>
					</div>
				</div>
			}
			{
				this.state.profile===profils[2] && 
				<div>
					<div className="Photo">
						<img src={Claude} alt='claude' />
					</div>
					<div className="Prenom">
						<p>Prénom : {profils[2].prenom}</p>
					</div>
					<div className="Nom">
						<p>Nom : {profils[2].nom}</p>
					</div>
					<div className="Naissance">
						<p>Date de naissance : {profils[2].naissance}</p>
					</div>
				</div>
			}
			</div>
			<div>
				<button className="bouton4" onClick={this.ChangeCouleur}> Change style </button>
			</div>
		</div>
		<div className="container" style={{width : 500}, {height : 200}}>
			<div className="Publication">
				<p>{this.state.profile.publi}</p>
			</div>
			<div>
				<button className="bouton5" onClick={this.ChangeCouleur}> 👍 C'est super! </button>
			</div>
		</div>
	</>
	)
	}
}


{/*Ce component appelle le component Infos*/}
class Page extends React.Component {

	render(){
		return (
			<div>
				<Infos />
			</div>
		)
	}
}


ReactDOM.render(
  <Page />,
  document.getElementById('root')
);