
$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal();

    const addCards = (items) => {
        const cardsContainer = $("#cardsContainer");

        items.forEach(item => {
            let itemToAppend = `<div class="col s12 m6">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${item.image}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                        <p><a href="#">${item.link}</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>`;
            cardsContainer.append(itemToAppend);
        });
    }

    const cardList = [
        {
            title: "Kitten 1",
            image: "images/kitten1.jpg",
            link: "About Kitten 1",
            description: "Demo description about kitten 1"
        },
        {
            title: "Kitten 2",
            image: "images/kitten2.jpg",
            link: "About Kitten 2",
            description: "Demo description about kitten 2"
        }
    ];

    addCards(cardList);
    
    const formSubmitted = () => {
        let formData = {
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        console.log(formData); 
        
        // AJAX call to submit form data
        $.ajax({
            type: 'POST',
            url: '/submit-form', 
            data: formData,
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.error(error);
            }
        });
    }

    $('#driverForm').submit((event) => {
        event.preventDefault(); 
        formSubmitted(); 
    });

    $('#clickMeButton').click(() => {
        alert("Thanks for clicking me. Hope you have a nice day!")
    });
});