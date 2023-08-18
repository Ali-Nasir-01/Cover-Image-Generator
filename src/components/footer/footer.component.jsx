import React from 'react';
import {  GitHub } from 'react-feather';

import './footer.styles.scss';

export default function Footer(currentMode) {
	return (
		<>
		<footer>
			<div className="mtb-15 socialLinks">
				<a href="https://github.com/Ali-Nasir-01" target="_BLANK" rel="noopener noreferrer">
					<GitHub size="18" />
				</a>
			</div>
		</footer>
		</>
	);
}
