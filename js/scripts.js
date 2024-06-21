$(document).ready(function () {
    $('#gallery').click(function () {
        $('#inputGroupFile01').click();
    });

    $('#inputGroupFile01').change(function (event) {
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#preview').html('<img src="' + e.target.result + '" alt="Image Preview">');
            }
            reader.readAsDataURL(input.files[0]);
        }
    });
});

document.querySelector('.custom-file-input').addEventListener('change', function (event) {
    var fileName = event.target.files[0].name;
    var label = event.target.nextElementSibling;
    label.innerText = fileName;
});

$(document).ready(function () {
    $('#thumbs-up-icon').hover(
        function () {
            $('#additional-symbols').show();
        },
        function () {
            $('#additional-symbols').hide();
        }
    );
});

$(document).ready(function(){
    $('#comment-icon').click(function(){
        $('#comment-input').show().focus();
    });
});

$(document).ready(function() {
    $("#openNav ").click(function() {
      $("#mySidenav").css("width", "250px");
    });
  console.log("hello");
    $(".closebtn").click(function() {
      $("#mySidenav").css("width", "0");
    });
  });

  $(document).ready(function(){
    $('#dark-mode-toggle').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('dark-mode');
        $('#mode-icon').toggleClass('fa-toggle-off fa-toggle-on');
    });
});

$(document).ready(function() {
    var fileInput = $('#inputGroupFile01');
    var postText = $('#postText');
    var postButton = $('#postButton');

    postButton.hide();


    function togglePostButton() {
        if (fileInput.get(0).files.length > 0 || postText.val().trim() !== '') {
            postButton.show();
        } else {
            postButton.hide();
        }
    }

    fileInput.change(function() {
        togglePostButton();
    });


    postText.on('input', function() {
        togglePostButton();
    });

    postButton.click(function() {
        console.log('Posting...');
    });
});

function postBirthdayWish(name) {
    let message;
    switch (name) {
        case 'Anita Money':
            message = $('#anitaMessage').val();
            break;
        case 'Melisa Dunns':
            message = $('#melisaMessage').val();
            break;
        case 'Epf':
            message = $('#epfMessage').val();
            break;
        default:
            return;
    }

    alert(`You wished ${name} a happy birthday!!`);

}

