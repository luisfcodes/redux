'use client'
import * as S from './styles'
import * as t from '@/constants'
import { connect } from 'react-redux'

function Home({ count, increment, decrement}) {
  const handleIncrement = () => {
    increment()
  }

  const handleDecrement = () => {
    decrement()
  }

  return (
      <S.Container>
        <button onClick={handleIncrement}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>-</button>
      </S.Container>
  );
}

const mapStateToProps = ({count}) => {
  return {
    count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: t.INCREMENT }),
    decrement: () => dispatch({ type: t.DECREMENT })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

