import { useContext } from 'react'
import { ShopContext } from '../context'

function BasketItem(props) {
	const { id, name, price, quantity } = props

	const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext)

	return (
		<li className='collection-item'>
			{name}{' '}
			<i
				className='material-icons basket-quantity'
				onClick={() => decQuantity(id)}
			>
				remove
			</i>{' '}
			{quantity}{' '}
			<i
				className='material-icons basket-quantity'
				onClick={() => incQuantity(id)}
			>
				add
			</i>{' '}
			x {price} = {price * quantity} руб.
			<span className='secondary-content'>
				<i
					className='material-icons basket-delete'
					onClick={() => removeFromBasket(id)}
				>
					close
				</i>
			</span>
		</li>
	)
}

export { BasketItem }
