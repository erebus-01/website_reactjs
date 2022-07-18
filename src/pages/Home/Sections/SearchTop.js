import React from 'react'
import styled from 'styled-components';
import { search as SearchIcon } from '../../../svg'

const Search = styled.div`
  height: 100px;
  background-color: rgb(18, 18, 18);
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  max-width: 1600px;
  display: flex;
  height: 100%;
  justify-content: 'space-between';
`

const InputSearch = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
`

const Input = styled.div`
  align-items: center;
  background-color: rgb(32, 32, 32);
  border-radius: 24px;
  display: flex;
  height: 40px;
  margin: 8px 0;
  min-width: 160px;
  width: 160px;
`
const Icon = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 100%;
  margin: 13.62px;
`

const ButtonIcon = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: rgba(245, 245, 245, 0.6);;
  background-color: inherit;
  position: relative;

  ::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    pointer-events: none;
  }
  span{
    display: block;
    line-height: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height: 12.75px;
    width: 12.75px;
  }
  SearchIcon{
    width: 100%;
    height: 100%;
  }
`

const TextInput = styled.div`
  width: 100%;
  height: 100%;
`

const InputCenter = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%
`

const SearchInput = styled.input`
  margin-right: 13.62px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(245, 245, 245);
  outline: none;
  width: 100%;

  :not(:focus){
    border-color: rgba(0, 0, 0, 0);
  }
  *:focus{
    border-color: rgba(0, 0, 0, 0);
    outline: none;
  }
  ::placeholder{
    font-weight: 500;
  }
`

const Choose = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  
  span{
    color: rgb(245, 245, 245, 0.6);
  }
`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`

const Li = styled.li`
  display: flex;

  :nth-child(2){
    margin-left: 10px;
  }
  :last-child{
    margin-left: 10px;
  }
`

const Item = styled.a`
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  color: currentcolor;
  pointer-events: none;
  padding: 10px;
  cursor: pointer;
  color: rgb(245, 245, 245, 0.6);
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 1px;
  
  &.active {
    color: rgb(245, 245, 245);
  }
`

const Cart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 0;
  height: 100%;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SearchTop = () => {
  return (
    <Search>
      <Container>
        <InputSearch>
          <Input>
            <Icon>
              <ButtonIcon>
                <span>
                  <SearchIcon />
                </span>
              </ButtonIcon>
            </Icon>
            <TextInput>
              <InputCenter>
                <SearchInput placeholder='Search store'></SearchInput>
              </InputCenter>
            </TextInput>
          </Input>
        </InputSearch>
        <Choose>
          <span>
            <Ul>
              <Li>
                <div>
                  <Item className='active'>Discover</Item>
                </div>
              </Li>
              <Li>
                <div>
                  <Item>Browse</Item>
                </div>
              </Li>
              <Li>
                <div>
                  <Item>News</Item>
                </div>
              </Li>
            </Ul>
          </span>
        </Choose>
        <Cart>
          <Options>
            <div><Item>Wishlist</Item></div>
            <div><Item>Cart</Item></div>
          </Options>
        </Cart>
      </Container>
    </Search>
  )
}

export default SearchTop