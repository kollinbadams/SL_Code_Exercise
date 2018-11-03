import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import { getPeople } from '../actions/AsyncActions'
import { countCharacters } from '../utils'
import PeopleTable from './PeopleTable'
import CharacterCountTable from './CharacterCountTable'

//Button styling
const Button = styled.button`
  background: #4a90e2;
  padding: 1em;
  color: white;
  border: 2px solid #4a90e2;
  border-radius: 3px;
  font-size:1em;
`;


class People extends Component {
	constructor() {
		super()
		//People, char array, and click states
		this.state = {
			people: [],
			chars: [],
			isClicked: false
		}
	}
	//Mount the response to the props and state to be passed through the components
	componentDidMount(){
		this.props.getPeople().
		//then( (r) => console.log(r))
		then( (r) => this.setState({people: r.people}, () => {
		//prevent character count state from loading more than once on page reload, map it to send to characterCount method
		this.state.people.map(c => this.characterCounter(c.email_address))
		}))
	}

	//pass the array of characters to the util function for handling the counting logic
	characterCounter(allChars){
		this.setState({ chars: countCharacters(allChars.toUpperCase())})
	}

	//custom click handler, adjusting the state of the click
	handleClick(){
		this.setState({isClicked: !this.state.isClicked})
	}

	//Render the Table with data from API
	render() {
		//link the states
		const { people, chars, isClicked } = this.state
		
		//button title setup
		const viewPrompt = "View Character Count"
		const closePrompt = "Close Character Count"
		const characterCountButtonTitle = isClicked ? closePrompt : viewPrompt

		return (
			<div style={{justifyContent:'center', alignItems:'center'}}>
				<div>
					<h3 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>SalesLoft: List of People</h3>
					<PeopleTable people={people}/>
					<br/><br/>
				</div>
				<div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
					<Button  onClick = {this.handleClick.bind(this)}>{characterCountButtonTitle}</Button>
				</div>
				<br/><br/>
				{isClicked ? <CharacterCountTable count={chars}/>: null}
			</div>

		)
	}
}

//Map the state and dispatch to Action
const mapStateToProps = (dispatch) => ({
    getPeople: () => dispatch(getPeople())
})



//Connect the mapState to People
export default connect(null, mapStateToProps)(People)
