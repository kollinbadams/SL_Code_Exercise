import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content:center;
align-items: center;
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 50%;
}
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
tr:nth-child(even) {
    background-color: #e9e9e9;
}
`;

const PeopleTable = (props) => { 
	return (
		<Container>
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Title</th>
						<th>Email Address</th>
					</tr>
					{props.people.map(p =>
					<tr key={p.id}>
						<td>{p.display_name}</td>
						<td>{p.title}</td>
						<td>{p.email_address}</td>
					</tr>
					)}
				</tbody>
			</table>
		</Container>
		)
}

	export default PeopleTable
