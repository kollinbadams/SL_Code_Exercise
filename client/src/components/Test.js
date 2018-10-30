import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
  display: grid;
  box-shadow: 0 0 6px 0 rgba(58,58,58,0.24);
  width: 827px;
  height: 485px;
  border-top: 6px solid #4a90e2;
  grid-template: 30% 1fr / 1fr;
`

const TestBox = styled.div`
  margin-left: 30px;
  margin-right: 30px;

  p {
    font-size: 20px;
  }
`
const TestGreeting = () => (
	<TestBox>
		<h1 style={{textAlign: 'center'}}>
			Hello, Testing landing page
		</h1>
		<p>
			test, test, test
		</p>
	</TestBox>
)

export const Test = () => (
  <Box>
    <TestGreeting />
  </Box>
);
