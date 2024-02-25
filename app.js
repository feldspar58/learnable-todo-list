document.querySelector('#push').onclick = function () {
    if (document.querySelector('#freshtask input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML +=
            `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#freshtask input').value}
                </span>
                <button class="delete">
                    delete <i class="fas fa-trash"></i>
                </button>
            </div>
            `;

        document.querySelector('#freshtask input').value = "";

        document.querySelector('#tasks').addEventListener('click', function (event) {
            if (event.target.classList.contains('delete')) {
                event.target.parentNode.remove();
            }
        });
    }

    document.querySelector("#tasks").addEventListener('click', function (event) {
        if (event.target.classList.contains('task')) {
            event.target.classList.toggle('completed');
        }
    });
};
