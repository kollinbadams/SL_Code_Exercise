import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content:center;
align-items: center;
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 30%;
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

//Pass props into the count table for displaying, using the character as the key to each row
const CharacterCountTable = (props) => {
	return(
		<Container>
			<table>
				<tbody>
					<tr>
						<th>Character</th>
						<th>Count</th>
					</tr>
					{props.count.map(c =>
					<tr key={c.char}>
						<td>{c.char}</td>
						<td>{c.count}</td>
					</tr>
					)}
				</tbody>
			</table>
		</Container>
	)
}

export default CharacterCountTable
