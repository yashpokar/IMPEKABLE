import React from 'react';

const Card = props => (
	<div className="card">
		<span className="card__title">{ props.title }</span>

		<span className="card__text">
			{ props.text }

			<small className={ props.isUp ? 'is-up' : 'is-down' }>
				{ props.percent }%
			</small>
		</span>
	</div>
);

Card.defaultProps = {
	isUp: false,
};

export default Card;
