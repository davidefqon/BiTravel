import React, { useEffect } from 'react';
import logo from './logo.png';

export default function Component() {
  // Definimos la función para manejar el cambio del input
  const handleToggleChange = (event) => {
    const checked = event.target.checked;
    document.body.classList.toggle('osc');
    const label_toggle = document.getElementById('label_toggle');
    if (checked) {
      label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      label_toggle.style.color = 'yellow';
    } else {
      label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      label_toggle.style.color = 'aqua';
    }
  };

  // Utilizamos useEffect para ejecutar la función cuando el componente se monta
  useEffect(() => {
    const toggle = document.getElementById('toggle');
    toggle.addEventListener('change', handleToggleChange);

    // Devolvemos una función de limpieza para eliminar el event listener cuando el componente se desmonta
    return () => {
      toggle.removeEventListener('change', handleToggleChange);
    };
  }, []); // El segundo argumento [] indica que esta función se ejecutará solo una vez cuando el componente se monte

  return (
    <div className="header">
      <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation">
        <span className="navbar-toggle-icon"><span className="toggle-line"></span></span>
      </button>
      <img src={logo} alt="phoenix" width="27" />
      <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>

      <label htmlFor="toggle" id="label_toggle"><i className="fa-solid fa-moon"></i></label>
      <input type="checkbox" id="toggle" />
    </div>
  );
}
