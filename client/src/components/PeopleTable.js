import React from 'react'
import styled from 'styled-components'

const PeopleTable = (props) => { 
	return (
		<div>
			<table>
				<tr>
					<th>Name</th>
					<th>Title</th>
					<th>Email Address</th>
				</tr>
				{props.people.map(p =>
				<tr>
					<td>{p.display_name}</td>
					<td>{p.title}</td>
					<td>{p.email_address}</td>
				</tr>
				)}
			</table>
		</div>
		)
}

	export default PeopleTable
