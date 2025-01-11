const entries = [];
    
document.getElementById('addEntry').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const paquete = document.getElementById('paquete').value;
    const ciudad = document.getElementById('ciudad').value;

    // Validar que los campos estén llenos
    if (!name || !email || !paquete || !ciudad) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validar que el correo tenga formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Agregar entrada
    const entry = { name, email, paquete, ciudad };
    entries.push(entry);
    updateTable();

    // Limpiar el formulario
    document.getElementById('crudForm').reset();
});

function updateTable() {
    const tbody = document.getElementById('entryList');
    tbody.innerHTML = '';

    entries.forEach((entry, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td class="border px-4 py-2">${entry.name}</td>
            <td class="border px-4 py-2">${entry.email}</td>
            <td class="border px-4 py-2">${entry.paquete}</td>
            <td class="border px-4 py-2">${entry.ciudad}</td>
            <td class="border px-4 py-2">
                <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteEntry(${index})">Eliminar</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function deleteEntry(index) {
    entries.splice(index, 1);
    updateTable();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});



