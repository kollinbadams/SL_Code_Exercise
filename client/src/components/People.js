import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import { getPeople } from '../actions/AsyncActions'
import PeopleTable from './PeopleTable'

class People extends Component {
	constructor() {
		super()
		this.state = {
			people: []
		}
	}
	//Mount the response to the props and state to be passed through the components
	componentDidMount(){
		this.props.getPeople().
		then( (r) => console.log(r))
		//then( (r) => this.setState({people: r.people}) )
	}
	//Render the Table with data from API
	//Can Swap div for a stylized container after testing functionality
	render() {
		const { people } = this.state

		return (
			<div>
				<h3>SalesLoft: List of People</h3>
				<div>
					<PeopleTable people={people}/>
				</div>
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
