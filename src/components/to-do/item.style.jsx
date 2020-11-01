import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-top: 1em;
  text-decoration: ${props => props.isCompleted === true ? 'line-through' : 'initial'};
  width: 100%
`
export const Title = styled.div`
  display: inline-block;
  font-size: 1em;
  margin-left: 1em;
  text-decoration: inherit;
`
export const Input = styled.input`
  border: 1px solid gra;
  display: inline-block;
  font-size: 1em;
  min-width: 10%;
  max-width: 90%;
`

export const Id = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 2em;
`

export const DotDotDot = styled.div`
  color: gray;
  display: inline-block;
  padding-left: 0.5em;

  &:after {
    content: "...";
  }
`
