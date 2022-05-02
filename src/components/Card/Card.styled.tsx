import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 7px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%);
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  margin-bottom: 5px;
`

export const Button = styled.button`
  background: rgba(48, 48, 48, 0.6);
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  padding: 10px 15px;
`

export const Name = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #FFFFFF;
  margin-right: 29px;
  text-overflow:ellipsis;
  overflow:hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  @media (min-width: ${props => props.theme.lg}) {
    font-size: 36px;
    line-height: 43px;
  }
`

export const Eyebrow = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #FFFFFF;
  padding: 5px 0;
`

export const Description = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  padding: 0 35px;
  color: #FFFFFF;
  text-overflow:ellipsis;
  overflow:hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  gap: 7px;
  padding-right: 34px;
`
