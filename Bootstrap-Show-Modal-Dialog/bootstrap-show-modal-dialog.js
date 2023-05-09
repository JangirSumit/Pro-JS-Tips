function openModalDialog(options) {
    const modalElement = document.createElement('div');
    const modalBackDropElement = document.createElement('div');

    // Set up the modal HTML
    modalElement.classList.add('modal', 'fade', 'show');
    modalElement.innerHTML = `
    <div class="modal-dialog ${options.size || ""}">
      <div class="modal-content">
        <div class="modal-header bg-${options.headerType || ''}">
          <h5 class="modal-title">${options.title || "Header"}</h5>
        </div>
        <div class="modal-body overflow-auto-x">
          <p>${options.body}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary close">Close</button>
        </div>
      </div>
    </div>`;

    modalBackDropElement.classList.add('modal-backdrop', 'fade', 'show');

    // Hide the modal by default
    modalElement.style.display = 'none';

    // Add the modal to the page
    document.body.appendChild(modalElement);
    document.body.appendChild(modalBackDropElement);

    // Show the modal when the button is clicked
    modalElement.style.display = 'block';

    // Hide the modal when the close button or overlay is clicked
    modalElement.addEventListener('click', function (event) {
        if (event.target === modalElement ||
            event.target.classList.contains('close') ||
            event.target.dataset.dismiss === 'modal') {

            document.body.removeChild(modalElement);
            document.body.removeChild(modalBackDropElement);
        }
    });
}

// Calling
const optionsForModalDialog = {
  headerType: "Info",
  title: "Header",
  body: "Body",
  size: "modal-xl"
};

openModalDialog();