import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jeanne from './jeanne.png';
import Martine from './martine.png';
import Claude from './claude.png';

{/*On détermine les 3 profils*/}

const profils = [
{

prenom : 'Jeanne',
nom : 'J',
naissance : '28/02/1990'
},

{

prenom : 'Martine',
nom : 'M',
naissance : '05/06/1981'
},

{

prenom : 'Claude',
nom : 'C',
naissance : '11/12/1998'
}];

{/*La classe Infos affiche le header avec les 3 boutons, le container pour la fiche info
	la fonction pour afficher les infos en fonction de l'event onClick*/}
class Infos extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			tabType: profils[0]
		}
	}

	GetProfils=(props)=>{
		this.setState ({
			tabType:props
		})
		console.log(this.state.tabType);
	}

	render() {

	return (
		<>
		<header>
			<button className="bouton1" onClick={()=> this.GetProfils(profils[0])}> Jeanne </button>
			<button className="bouton2" onClick={()=> this.GetProfils(profils[1])}> Martine </button>
			<button className="bouton3" onClick={()=>  this.GetProfils(profils[2])}> Claude </button>
		</header>
		<div className="container">
		<div>
			{
				this.state.tabType===profils[0] && 
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
				this.state.tabType=== profils[1] && 
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
				this.state.tabType===profils[2] && 
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