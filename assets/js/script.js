let contenedorInvitacion = document.getElementById('invitacion');
let formulario = document.getElementById('contactForm');
let fecha = new Date().toLocaleDateString('es-ES', {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
});

contenedorInvitacion.innerHTML = `
                    <div class="p-4 text-center text-body">
						<h3 class="display-5">¡Apresúrese!</h3>
						<h4 class="text-body-secondary fw-semibold lh-lg">
							El plazo máximo para inscribirse es de solo 2 días después de la
							siguiente fecha:
						</h4>
						<h4 class="display-4">${fecha}</h4>
					</div>
`;

formulario.addEventListener('submit', function (event) {
	event.preventDefault();
});
